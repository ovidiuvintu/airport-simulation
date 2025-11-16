using System;
using System.IO;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;

namespace AirportManagement.Service.Services;

public class RequestBodyLoggingMiddleware
{
    private readonly RequestDelegate _next;
    private readonly ILogger<RequestBodyLoggingMiddleware> _logger;

    public RequestBodyLoggingMiddleware(RequestDelegate next, ILogger<RequestBodyLoggingMiddleware> logger)
    {
        _next = next;
        _logger = logger;
    }

    public async Task InvokeAsync(HttpContext context)
    {
        var req = context.Request;

        // Check environment flag to avoid noisy logging in CI or production
        var enabled = Environment.GetEnvironmentVariable("ENABLE_REQUEST_BODY_LOG");
        if (!string.Equals(enabled, "true", StringComparison.OrdinalIgnoreCase))
        {
            await _next(context);
            return;
        }

        bool shouldLog = false;
        var contentType = req.ContentType ?? string.Empty;

        if (!string.IsNullOrEmpty(contentType) && (contentType.Contains("merge-patch+json") || contentType.Contains("application/json")))
        {
            // Only log for JSON-like content types
            shouldLog = true;
        }

        if (shouldLog && req.ContentLength > 0)
        {
            try
            {
                req.EnableBuffering();
                req.Body.Seek(0, SeekOrigin.Begin);
                using var reader = new StreamReader(req.Body, Encoding.UTF8, detectEncodingFromByteOrderMarks: false, leaveOpen: true);
                var body = await reader.ReadToEndAsync();
                req.Body.Seek(0, SeekOrigin.Begin);

                _logger.LogInformation("[REQ-BODY] {Method} {Path} ContentType={ContentType} Body={Body}", req.Method, req.Path, req.ContentType, body);
            }
            catch (System.Exception ex)
            {
                _logger.LogWarning(ex, "Failed to log request body");
            }
        }

        await _next(context);
    }
}

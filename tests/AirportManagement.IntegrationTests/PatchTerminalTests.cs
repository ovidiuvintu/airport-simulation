using System.Net.Http.Json;
using System.Text.Json;
using System.Threading.Tasks;
using System.Text;
using System.Linq;
using System.Net.Http;
using Microsoft.AspNetCore.Mvc.Testing;
using Microsoft.Extensions.DependencyInjection;
using Xunit;

namespace AirportManagement.IntegrationTests;

public class PatchTerminalTests : IClassFixture<CustomWebApplicationFactory>
{
    private readonly CustomWebApplicationFactory _factory;

    public PatchTerminalTests(CustomWebApplicationFactory factory)
    {
        _factory = factory;
    }

    [Fact]
    public async Task CreateTerminal_Then_PatchTerminal_Returns204()
    {
        var client = _factory.CreateClient();

        // Create an airport (if not present)
        var airportBody = new
        {
            name = "Integration Test Airport",
            description = "Created by integration test",
            airportCode = "IT1"
        };

        var airportResp = await client.PostAsJsonAsync("/api/airportspecification/airports?api-version=1.0", airportBody);
        airportResp.EnsureSuccessStatusCode();
        var airportLocation = airportResp.Headers.Location?.ToString() ?? string.Empty;
        Assert.False(string.IsNullOrEmpty(airportLocation));
        var airportId = airportLocation.Split('/').Last();

        // Create a terminal
        var termBody = new { name = "Integration Terminal" };
        var termResp = await client.PostAsJsonAsync($"/api/airportspecification/airports/{airportId}/terminals?api-version=1.0", termBody);
        Assert.Equal(System.Net.HttpStatusCode.Created, termResp.StatusCode);
        var termLocation = termResp.Headers.Location?.ToString() ?? string.Empty;
        Assert.False(string.IsNullOrEmpty(termLocation));
        var termId = termLocation.Split('/').Last();

        // Apply JSON Merge Patch
        var patchDoc = JsonDocument.Parse("{ \"name\": \"Patched from Test\" }");
        var content = new StringContent(patchDoc.RootElement.GetRawText(), Encoding.UTF8, "application/merge-patch+json");
        var patchResp = await client.PatchAsync($"/api/airportspecification/airports/{airportId}/terminals/{termId}?api-version=1.0", content);

        Assert.Equal(System.Net.HttpStatusCode.NoContent, patchResp.StatusCode);
    }
}

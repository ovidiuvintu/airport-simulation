using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace AirportManagement.Service.Repository;

// Provides a design-time factory so `dotnet ef` uses the same connection string
// as the running application (reads appsettings.json and appsettings.{ENV}.json).
public class DesignTimeDbContextFactory : IDesignTimeDbContextFactory<AirportContext>
{
    public AirportContext CreateDbContext(string[] args)
    {
        // Determine the content root where appsettings.json lives (project directory)
        var basePath = AppContext.BaseDirectory;

        // Try to locate the project directory by walking up until we find appsettings.json
        var dir = new System.IO.DirectoryInfo(basePath);
        while (dir != null && !System.IO.File.Exists(System.IO.Path.Combine(dir.FullName, "appsettings.json")))
        {
            dir = dir.Parent;
        }

        var projectPath = dir?.FullName ?? AppContext.BaseDirectory;

        var env = Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT") ?? Environment.GetEnvironmentVariable("DOTNET_ENVIRONMENT") ?? "Production";

        var config = new ConfigurationBuilder()
            .SetBasePath(projectPath)
            .AddJsonFile("appsettings.json", optional: true, reloadOnChange: false)
            .AddJsonFile($"appsettings.{env}.json", optional: true, reloadOnChange: false)
            .AddEnvironmentVariables()
            .Build();

        var connectionString = config.GetConnectionString("DefaultConnection");

        if (string.IsNullOrEmpty(connectionString))
        {
            throw new InvalidOperationException("Could not find a 'DefaultConnection' connection string in appsettings.json or environment variables.");
        }

        var builder = new DbContextOptionsBuilder<AirportContext>();
        builder.UseSqlite(connectionString);

        return new AirportContext(builder.Options);
    }
}

using Microsoft.AspNetCore.Mvc;
using WebApp.Api.Controllers;

namespace WebApp.Api.Tests;

public sealed class HealthControllerTests
{
    [Fact]
    public void Get_ReturnsHealthyStatus()
    {
        var controller = new HealthController();

        var result = controller.Get();

        var ok = Assert.IsType<OkObjectResult>(result.Result);
        var body = Assert.IsType<HealthResponse>(ok.Value);
        Assert.Equal("healthy", body.Status);
    }
}

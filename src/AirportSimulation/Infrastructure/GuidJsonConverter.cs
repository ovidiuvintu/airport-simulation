using System.Text.Json;
using System.Text.Json.Serialization;

//https://stackoverflow.com/questions/72305673/move-from-newtonsoft-json-to-system-text-json-and-guid-problem
namespace Infrastructure;

public class GuidJsonConverter : JsonConverter<Guid>
{
    public override Guid Read(
            ref Utf8JsonReader reader,
            Type typeToConvert,
            JsonSerializerOptions options) =>
                Guid.Parse(reader.GetString()!);

    public override void Write(
            Utf8JsonWriter writer,
            Guid value,
            JsonSerializerOptions options) =>
                writer.WriteStringValue(value.ToString());
}

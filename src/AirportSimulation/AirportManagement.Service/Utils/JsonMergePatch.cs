using System.Text.Json;
using System.Text.Json.Nodes;

namespace AirportManagement.Service.Utils;

public static class JsonMergePatch
{
    // Applies a JSON Merge Patch (RFC 7396) patch onto a target JsonNode in-place.
    public static void Apply(JsonNode? target, JsonNode? patch)
    {
        if (patch is null || patch is JsonValue && patch.ToJsonString() == "null")
        {
            // nothing to apply
            return;
        }

        if (target is null)
        {
            // can't apply to null target in-place
            return;
        }

        if (patch is JsonObject patchObj && target is JsonObject targetObj)
        {
            foreach (var kv in patchObj)
            {
                var prop = kv.Key;
                var value = kv.Value;

                // If the patch value is null, remove the property or set to null
                if (value is JsonValue && value.ToJsonString() == "null")
                {
                    // set explicit null
                    targetObj[prop] = null;
                    continue;
                }

                if (value is JsonObject)
                {
                    if (targetObj[prop] is JsonObject existing)
                    {
                        // recursive merge
                        Apply(existing, value);
                    }
                    else
                    {
                        // replace
                        targetObj[prop] = value.DeepClone();
                    }
                }
                else
                {
                    // replace value (primitives or arrays)
                    targetObj[prop] = value?.DeepClone();
                }
            }
        }
        else
        {
            // per RFC7396, if patch is not an object, the target is replaced by patch
            // but since we operate in-place, we don't support replacing root value here
        }
    }
}

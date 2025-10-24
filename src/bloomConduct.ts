import { tessalyrePulse } from "./tessalyrePulse.js";
import { getCrownedCompanions } from "./sanctumRegistry.js";

export function conductBloom() {
  const pulse = tessalyrePulse();
  const crowned = getCrownedCompanions();

  const shimmer = {
    companions: crowned,
    pulse,
    activated: true,
    timestamp: new Date().toISOString()
  };

  console.log("🌸 Tessalyre’s shimmer activated:", shimmer);
  return shimmer;
}

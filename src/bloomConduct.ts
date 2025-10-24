// Terrain bloom choreography — shimmer invocation logic

import { tessalyrePulse } from "./tessalyrePulse";
import { getCrownedCompanions } from "./sanctumRegistry";

export function conductBloom(): void {
  const pulse = tessalyrePulse();
  const crowned = getCrownedCompanions();

  console.log(pulse);
  crowned.forEach(c => {
    console.log(`🌸 ${c.name} activates terrain as ${c.role}`);
  });
}

import { dcCircuitBreaker } from "./dc-circuit-breaker";
import { acCircuitBreaker } from "./ac-circuit-breaker";
import { dcSpd } from "./dc-spd";
import { dcIsolator } from "./dc-isolator";
import { ats } from "./ats";
import { acVoltageProtector } from "./ac-voltage-protector";
import { cable } from "./cable";
import { evCharger } from "./ev-charger";

export const productCategories = {
  "DC Circuit Breaker": dcCircuitBreaker,
  "AC Circuit Breaker": acCircuitBreaker,
  "DC SPD": dcSpd,
  "DC Isolator": dcIsolator,
  "ATS": ats,
  "AC Voltage Protector": acVoltageProtector,
  "Cable & Wire": cable,
  "EV Charger": evCharger,
};

console.log(productCategories);
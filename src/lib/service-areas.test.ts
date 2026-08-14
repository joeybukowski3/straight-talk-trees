import { describe, expect, it } from "vitest";
import {
  DEFAULT_ZIP_GROUP,
  LOCAL_FOCUS_NAMES,
  SERVICE_AREAS,
  SERVICE_AREA_ZIPS,
  ZIP_GROUPS,
} from "./service-areas";

describe("service-area data", () => {
  it("keeps locations alphabetical and uniquely named", () => {
    const names = SERVICE_AREAS.map(({ name }) => name);

    expect(names).toHaveLength(236);
    expect(new Set(names).size).toBe(names.length);
    expect(names).toEqual([...names].sort((a, b) => a.localeCompare(b)));
  });

  it("derives one numeric row per ZIP code", () => {
    const zipCodes = SERVICE_AREA_ZIPS.map(({ zipCode }) => zipCode);

    expect(zipCodes).toHaveLength(313);
    expect(new Set(zipCodes).size).toBe(zipCodes.length);
    expect(zipCodes).toEqual([...zipCodes].sort((a, b) => Number(a) - Number(b)));
    expect(zipCodes.every((zipCode) => /^\d{5}$/.test(zipCode))).toBe(true);
  });

  it("uses the locally relevant 775xx group by default", () => {
    expect(DEFAULT_ZIP_GROUP).toBe("775xx");
    expect(ZIP_GROUPS).toContain(DEFAULT_ZIP_GROUP);
    expect(
      SERVICE_AREA_ZIPS.filter(({ group }) => group === DEFAULT_ZIP_GROUP).length,
    ).toBeGreaterThan(0);
  });

  it("keeps every core-area name inside the full directory without reducing extended coverage", () => {
    const allNames = new Set(SERVICE_AREAS.map(({ name }) => name));

    expect(new Set(LOCAL_FOCUS_NAMES).size).toBe(LOCAL_FOCUS_NAMES.length);
    expect(LOCAL_FOCUS_NAMES.every((name) => allNames.has(name))).toBe(true);
    expect(SERVICE_AREAS.length - LOCAL_FOCUS_NAMES.length).toBeGreaterThan(200);
  });

  it("retains shared community relationships for ZIP results", () => {
    const sharedZip = SERVICE_AREA_ZIPS.find(({ zipCode }) => zipCode === "77583");

    expect(sharedZip?.communities).toEqual(
      expect.arrayContaining(["Arcola", "Iowa Colony", "Rosharon"]),
    );
  });

  it("keeps out-of-group exact ZIPs available to whole-dataset search", () => {
    const query = "77459";
    const results = SERVICE_AREA_ZIPS.filter(({ zipCode, communities, counties }) =>
      [zipCode, ...communities, ...counties].some((value) =>
        value.toLocaleLowerCase().includes(query),
      ),
    );

    expect(DEFAULT_ZIP_GROUP).not.toBe("774xx");
    expect(results.map(({ zipCode }) => zipCode)).toEqual(["77459"]);
    expect(results[0]?.communities).toEqual(expect.arrayContaining(["Missouri City", "Sienna"]));
  });
});

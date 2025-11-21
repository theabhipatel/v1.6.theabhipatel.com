import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { SectionHeading } from "./SectionHeading";

describe("SectionHeading", () => {
  it("renders title correctly", () => {
    render(<SectionHeading title="Test Title" />);
    expect(screen.getByText("Test Title")).toBeDefined();
  });

  it("renders subtitle when provided", () => {
    render(<SectionHeading title="Test Title" subtitle="Test Subtitle" />);
    expect(screen.getByText("Test Subtitle")).toBeDefined();
  });

  it("applies gradient classes when gradient prop is true", () => {
    const { container } = render(
      <SectionHeading title="Test Title" gradient={true} />
    );
    const heading = container.querySelector("h2");
    expect(heading?.className).toContain("bg-gradient-to-r");
    expect(heading?.className).toContain("from-brand-blue-500");
    expect(heading?.className).toContain("to-brand-indigo-500");
  });

  it("applies correct alignment classes", () => {
    const { container: leftContainer } = render(
      <SectionHeading title="Left" align="left" />
    );
    expect(leftContainer.querySelector("div")?.className).toContain(
      "text-left"
    );

    const { container: centerContainer } = render(
      <SectionHeading title="Center" align="center" />
    );
    expect(centerContainer.querySelector("div")?.className).toContain(
      "text-center"
    );

    const { container: rightContainer } = render(
      <SectionHeading title="Right" align="right" />
    );
    expect(rightContainer.querySelector("div")?.className).toContain(
      "text-right"
    );
  });

  it("uses center alignment by default", () => {
    const { container } = render(<SectionHeading title="Test" />);
    expect(container.querySelector("div")?.className).toContain("text-center");
  });
});

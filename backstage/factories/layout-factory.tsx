import config from "@backstage/config";

interface LayoutFactoryProps {
  slug: string;
  children?: React.ReactNode;
}

export function LayoutFactory({ slug, children }: LayoutFactoryProps) {
  if (!config.layouts) {
    throw new Error("No layouts found in config");
  }

  const layoutConfig = config.layouts.find((layout) => layout.slug === slug);

  if (!layoutConfig) {
    throw new Error(`Layout ${slug} not found in config`);
  }

  const LayoutComponent = layoutConfig.component;

  if (!LayoutComponent) {
    throw new Error(`Layout ${slug} does not have a component`);
  }

  return <LayoutComponent>{children}</LayoutComponent>;
}

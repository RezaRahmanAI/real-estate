export interface ProjectFeature {
  id: string;
  title: string;
  description: string;
  icon: string;
  order: number;
  projectId: string;
  isActive?: boolean;
}

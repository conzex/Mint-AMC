export interface IndustrySolution {
  id: string;
  title: string;
  description: string;
  keyFeatures: string[];
  useCase: string;
}

export interface EngagementModel {
  id: string;
  title: string;
  description: string;
  idealFor: string;
  highlights: string[];
}

export const solutionsData = {
  industries: [
    {
      id: 'smb',
      title: '{{SOL_SMB_TITLE}}',
      description: '{{SOL_SMB_DESC}}',
      keyFeatures: ['{{SOL_SMB_FEAT_1}}', '{{SOL_SMB_FEAT_2}}', '{{SOL_SMB_FEAT_3}}'],
      useCase: '{{SOL_SMB_USECASE}}',
    },
    {
      id: 'enterprise',
      title: '{{SOL_ENTERPRISE_TITLE}}',
      description: '{{SOL_ENTERPRISE_DESC}}',
      keyFeatures: ['{{SOL_ENTERPRISE_FEAT_1}}', '{{SOL_ENTERPRISE_FEAT_2}}', '{{SOL_ENTERPRISE_FEAT_3}}'],
      useCase: '{{SOL_ENTERPRISE_USECASE}}',
    },
    {
      id: 'government',
      title: '{{SOL_GOVT_TITLE}}',
      description: '{{SOL_GOVT_DESC}}',
      keyFeatures: ['{{SOL_GOVT_FEAT_1}}', '{{SOL_GOVT_FEAT_2}}', '{{SOL_GOVT_FEAT_3}}'],
      useCase: '{{SOL_GOVT_USECASE}}',
    },
    {
      id: 'healthcare',
      title: '{{SOL_HEALTHCARE_TITLE}}',
      description: '{{SOL_HEALTHCARE_DESC}}',
      keyFeatures: ['{{SOL_HEALTHCARE_FEAT_1}}', '{{SOL_HEALTHCARE_FEAT_2}}', '{{SOL_HEALTHCARE_FEAT_3}}'],
      useCase: '{{SOL_HEALTHCARE_USECASE}}',
    },
    {
      id: 'education',
      title: '{{SOL_EDU_TITLE}}',
      description: '{{SOL_EDU_DESC}}',
      keyFeatures: ['{{SOL_EDU_FEAT_1}}', '{{SOL_EDU_FEAT_2}}', '{{SOL_EDU_FEAT_3}}'],
      useCase: '{{SOL_EDU_USECASE}}',
    },
  ] as IndustrySolution[],

  models: [
    {
      id: 'break-fix',
      title: '{{MODEL_BREAKFIX_TITLE}}',
      description: '{{MODEL_BREAKFIX_DESC}}',
      idealFor: '{{MODEL_BREAKFIX_IDEAL}}',
      highlights: ['{{MODEL_BREAKFIX_HIGH_1}}', '{{MODEL_BREAKFIX_HIGH_2}}'],
    },
    {
      id: 'preventive',
      title: '{{MODEL_PREVENTIVE_TITLE}}',
      description: '{{MODEL_PREVENTIVE_DESC}}',
      idealFor: '{{MODEL_PREVENTIVE_IDEAL}}',
      highlights: ['{{MODEL_PREVENTIVE_HIGH_1}}', '{{MODEL_PREVENTIVE_HIGH_2}}'],
    },
    {
      id: 'comprehensive',
      title: '{{MODEL_COMPREHENSIVE_TITLE}}',
      description: '{{MODEL_COMPREHENSIVE_DESC}}',
      idealFor: '{{MODEL_COMPREHENSIVE_IDEAL}}',
      highlights: ['{{MODEL_COMPREHENSIVE_HIGH_1}}', '{{MODEL_COMPREHENSIVE_HIGH_2}}'],
    },
    {
      id: 'remote-hands',
      title: '{{MODEL_REMOTEHANDS_TITLE}}',
      description: '{{MODEL_REMOTEHANDS_DESC}}',
      idealFor: '{{MODEL_REMOTEHANDS_IDEAL}}',
      highlights: ['{{MODEL_REMOTEHANDS_HIGH_1}}', '{{MODEL_REMOTEHANDS_HIGH_2}}'],
    },
  ] as EngagementModel[],
};

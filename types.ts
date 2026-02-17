
export enum View {
  INICIO = 'inicio',
  DECISIONES = 'decisiones',
  AS_IS = 'as_is',
  GAPS = 'gaps',
  TO_BE = 'to_be',
  CAPACIDADES = 'capacidades',
  ALTERNATIVAS = 'alternativas',
  SCORECARD = 'scorecard',
  RECOMENDACIONES = 'recomendaciones',
  RIESGOS = 'riesgos',
  ROADMAP = 'roadmap'
}

export interface CanvasCard {
  id: string;
  title: string;
  description: string;
  type: 'driver' | 'goal' | 'outcome' | 'capability' | 'stakeholder' | 'metric';
}

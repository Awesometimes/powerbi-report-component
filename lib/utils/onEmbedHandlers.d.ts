import { ReportProps, DashboardProps, TileProps, ReportVisualProps } from '../types';
declare const reportHandler: (report: any, reportRef: any, props: ReportProps) => void;
declare const reportVisualHandler: (reportVisual: any, reportRef: any, props: ReportVisualProps) => void;
declare const dashboardHandler: (dashboard: any, dashboardRef: any, props: DashboardProps) => void;
declare const tileHandler: (tile: any, props: TileProps) => void;
export { reportHandler, dashboardHandler, tileHandler, reportVisualHandler, };

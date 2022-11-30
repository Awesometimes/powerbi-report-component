import { Config } from '../types';
declare type UseReport = [any, (ref: any, config: Config) => void];
declare type UseBootstrap = [any, (ref: any, config: Config) => void, (ref: any, config: Config) => void];
declare function _useReport(performOnEmbed: (report: any, reportRef?: any) => void): UseReport;
declare function useReport(): UseReport;
declare function useBootstrap(): UseBootstrap;
export { _useReport, useReport, useBootstrap };

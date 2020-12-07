import {ErrorMessageType} from '../Types';

export interface AppErrorInterface {
  messages: ErrorMessageType;
  code: number;
  close?: boolean;
  title: string;
  action?: {type: string, [key: string]: any};
}

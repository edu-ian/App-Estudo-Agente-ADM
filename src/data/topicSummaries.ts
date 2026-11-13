import type { TopicStudyContent } from './summaryTypes';
import { DISC_1_1_PORTUGUES } from './summaries/disc1_1_portugues';
import { DISC_1_2_RLM } from './summaries/disc1_2_rlm';
import { DISC_1_3_INFORMATICA } from './summaries/disc1_3_informatica';
import { DISC_1_4_LEGISLACAO } from './summaries/disc1_4_legislacao';
import { DISC_2_1_ADM_PUBLICA } from './summaries/disc2_1_adm_publica';
import { DISC_2_2_DIR_ADMIN } from './summaries/disc2_2_dir_admin';
import { DISC_2_3_DIR_CONST } from './summaries/disc2_3_dir_const';
import { DISC_2_4_ETICA } from './summaries/disc2_4_etica';
import { DISC_2_5_ARQUIVOLOGIA } from './summaries/disc2_5_arquivologia';

export type {
  BadgeTone,
  TopicTable,
  TopicExample,
  TopicKeyPoint,
  TopicDeepDive,
  TopicStudyContent,
} from './summaryTypes';

export const TOPIC_SUMMARIES: Record<string, TopicStudyContent> = {
  ...DISC_1_1_PORTUGUES,
  ...DISC_1_2_RLM,
  ...DISC_1_3_INFORMATICA,
  ...DISC_1_4_LEGISLACAO,
  ...DISC_2_1_ADM_PUBLICA,
  ...DISC_2_2_DIR_ADMIN,
  ...DISC_2_3_DIR_CONST,
  ...DISC_2_4_ETICA,
  ...DISC_2_5_ARQUIVOLOGIA,
};

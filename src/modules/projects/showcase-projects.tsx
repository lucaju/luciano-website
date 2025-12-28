import { citationVisualization } from '@/content/projects/citation-visualization';
import { citeLens } from '@/content/projects/citelens';
import { comparative_ai_policy_and_regulation } from '@/content/projects/comparative-ai-policy';
import { dancingWithFitbit } from '@/content/projects/dancing-with-fitbit';
import { dhExperience } from '@/content/projects/dh-experience-the-game';
import { edmontonHistoricalPlaces } from '@/content/projects/edmonton-hsitorical-places';
import { fluxoArt } from '@/content/projects/fluxo-art';
import { ghostRiver } from '@/content/projects/ghost-river';
import { guiaVix } from '@/content/projects/guia-vix';
import { humanSpatialMovement } from '@/content/projects/human-spatial-movement';
import { junoChatbot } from '@/content/projects/juno-chatbot';
import { kaggle } from '@/content/projects/kaggle';
import { leafWriter } from '@/content/projects/leaf-writer';
import { mappingCampusAntiracismProtest } from '@/content/projects/mapping-campus-antiracism-protest';
import { memoriaEmRede } from '@/content/projects/memoria-em-rede';
import { mobileMediaUrbanSpace } from '@/content/projects/mobile-media-urban-space';
import { multiTouchVariorum } from '@/content/projects/multi-touch-variorum';
import { nagasakiKitty } from '@/content/projects/nagasaki-kitty';
import { nerve } from '@/content/projects/nerve';
import { networkResearchMap } from '@/content/projects/network-research-map';
import { pictio } from '@/content/projects/pictio';
import { primeiraMaoTablet } from '@/content/projects/primeira-mao-tablet';
import { sbfMsma } from '@/content/projects/sbf-msma';
import { shapingTheCity } from '@/content/projects/shapping-the-city';
import { synestheticAwareness } from '@/content/projects/synesthetic-awareness';
import { theConsultationMachine } from '@/content/projects/the-consultation-machine';
import { tweetosphereNetworkExplorer } from '@/content/projects/tweetosphere-network-explorer';
import { tvm } from '@/content/projects/twiter-vs-mode';
import { WorkflowInterfacesForEditorialProcesses } from '@/content/projects/workflow-interfaces';
import { ymx } from '@/content/projects/ymx-migration';
import { youtubeRecommendationRankflow } from '@/content/projects/youtube-recommendation-rankflow';
import { Timeline, type TimelineEntry } from '@/modules/projects/timeline';

const SHOWCASE_PROJECTS = [
	comparative_ai_policy_and_regulation,
	citationVisualization,
	citeLens,
	dancingWithFitbit,
	dhExperience,
	edmontonHistoricalPlaces,
	fluxoArt,
	ghostRiver,
	guiaVix,
	junoChatbot,
	humanSpatialMovement,
	kaggle,
	leafWriter,
	mappingCampusAntiracismProtest,
	memoriaEmRede,
	mobileMediaUrbanSpace,
	multiTouchVariorum,
	nagasakiKitty,
	nerve,
	networkResearchMap,
	pictio,
	primeiraMaoTablet,
	sbfMsma,
	shapingTheCity,
	synestheticAwareness,
	theConsultationMachine,
	tvm,
	tweetosphereNetworkExplorer,
	WorkflowInterfacesForEditorialProcesses,
	ymx,
	youtubeRecommendationRankflow,
] satisfies Array<TimelineEntry>;
export function ShowcaseProjects() {
	return <Timeline data={SHOWCASE_PROJECTS} />;
}

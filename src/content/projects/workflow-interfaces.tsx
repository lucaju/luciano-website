import { Collection, Item } from '@/modules/projects/timeline/extra'
import type { TimelineEntry } from '@/modules/projects/timeline'
import { SubHeading } from '@/modules/projects/timeline/sub-heading'
import { Text } from '@/modules/projects/timeline/text'

export const WorkflowInterfacesForEditorialProcesses: TimelineEntry = {
	title: 'Workflow Interfaces for Editorial Processes',
	place: 'INKE - University of Alberta',
	date: { start: 2011, end: 2014 },
	tags: ['DH', 'Publishing', 'Workflow', 'Design'],
	extra: [
		<Collection label='Publications'>
			<Item type='Journal Article' url='https://doi.org/10.1093/llc/fqt053'>
				Frizzera, L., Radzikowska, M., Roeder, G., Pena, E., Dobson, T., Rockwell, G., Ruecker, S.
				The INKE Research Group. (2013).{' '}
				<strong>Visual Workflow Interfaces for Editorial Processes</strong>. Literary and Linguistic
				Computing, 28(3), 26.
			</Item>
			<Item
				type='Proceedings'
				url='http://www.dh2012.uni-hamburg.de/conference/programme/abstracts/workflows-as-structured-surfaces/'
			>
				Frizzera, L., Ruecker, S., Radzikowska, M., Rockwell, G., Brown, S., & INKE TEAM. (2012).
				Workflow as Structured Surfaces. 324–326.
			</Item>
		</Collection>,
		<Collection label='Conferences'>
			<Item type='Conference Paper'>
				Frizzera, L., Montague, J., Sperhacke, S., Bernardes, M., Rockwell, G., Ruecker, S. & INKE
				Research Group (2014).{' '}
				<strong>Structured Surfaces for Digital Board Games: The DH Experience</strong>. Presented
				in the panel “The lifecycle of the interface.” Canadian Society for Digital Humanities
				(CSDH) @ Congress 2014. Brock University. St. Catherine, Canada.
			</Item>
			<Item type='Conference Paper'>
				Mohseni, A., Sondheim, D., Frizzera, L., Rockwell, G., & INKE TEAM. (2013).{' '}
				<strong>The Tablet as a New Medium for Scholarly Editions</strong>. Presented in the panel
				“The Design of New Knowledge Environments.” Digital Humanities 2013. University of Nebraska.
				Lincoln, USA.
			</Item>
			<Item type='Conference Paper'>
				Li, T., Frizzera, L., Radzikowska, M., Ruecker, S., & INKE TEAM. (2013).{' '}
				<strong>Tangible Workflows: Feeling the flow of information</strong>. Presented in the panel
				“‘Touch-a touch-a touch-a touch me’: Restoring materiality to the reader.” Canadian Society
				for Digital Humanities (CSDH) @ Congress 2013. University of Victoria. Victoria, Canada.
			</Item>
			<Item type='Conference Paper'>
				Frizzera, L., Ruecker, S., Radzikowska, M., Rockwell, G., Brown, S., & INKE TEAM. (2012).{' '}
				<strong>Workflow as Structured Surfaces</strong>. Digital Humanities 2012. Hamburg, Germany.
			</Item>
			<Item type='Conference Paper'>
				Frizzera, L., Ruecker, S., Radzikowska, M., Rockwell, G., Brown, S., & INKE TEAM. (2012).{' '}
				<strong>Workflow Interface for Editorial Process</strong>. Presented in the panel “Interface
				to Interface Research” at the SDH-SEMI @ Congress 2012. University of Waterloo. Waterloo,
				Canada.
			</Item>
		</Collection>,
		<Collection label='Code'>
			<Item type='Code' url='https://github.com/lucaju/Wrkflux'>
				Wrkflux
			</Item>
		</Collection>,
	],
	content: (
		<div className='space-y-1.5'>
			<SubHeading>Visual Workflow</SubHeading>
			<Text>
				Prototype tool to study different ways to manage and visualize documents in an editorial
				workflow. Developed in collaboration with INKE, where I worked as an interface designer and
				programmer.
			</Text>
			<SubHeading>Tangible Interface</SubHeading>
			<Text>
				At CSDH (Canadian Society for Digital Humanities) 2013 in Victoria, Canada, Tianyi Li
				presented the second version of your prototype on Workflows. This time we move toward
				touchscreens, one of the future directions defined in the project last year. The intention
				was mapping mouse clicks to touches and gestures. Watch this video and check how it works:
			</Text>
			<iframe
				allow='autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share'
				allowFullScreen
				className='rounded-lg w-full'
				height='267'
				referrerPolicy='strict-origin-when-cross-origin'
				src='https://player.vimeo.com/video/70748726?h=85f2698381'
				title='Vimeo video player'
			></iframe>
			<SubHeading>Wrkflux: Generalized Workflow</SubHeading>
			<Text>
				Following our work on visual interactive workflow, our current phase of the project focused
				on the creation and customization of workflows. While in the previous version we used a
				pre-defined workflow structure, the new version, which we called Wrkflux, allows users to
				create and design their own workflows. By adding this functionality, we are looking for
				other forms that workflows can be used, such as management processes, editorial processes,
				personal organization, mind mapping, and even for board game prototypes.
			</Text>
			<iframe
				allow='autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share'
				allowFullScreen
				className='rounded-lg w-full'
				height='267'
				referrerPolicy='strict-origin-when-cross-origin'
				src='https://player.vimeo.com/video/100567400?h=1c78150135'
				title='Vimeo video player'
			></iframe>
		</div>
	),
}

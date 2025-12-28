---
title: "The Orlando Project Visual Workflow"
coverImage: "Milena-workflow-surface-v03b.png"
description: "Exploring innovative visualization techniques for tracking editorial workflows in digital humanities projects, featuring a case study of The Orlando Project's XML-encoded biographical entries."
publishedAt: "2012-06-02"
status: "published"
featured: true
author: Luciano Frizzera
keywords:
  - "academia"
  - "papers"
  - "uofa"
  - "app"
  - "conference"
  - "flash"
  - "inke"
  - "visualization"
  - "workflow"
---

_Many projects in the digital humanities involve either digitization or enrichment of existing digital materials. In both these cases, the process can be understood as a workflow. This paper intends to discuss new forms of interactions for workflows tools. We used the workflow present in the Orlando Project to illustrate how structured surfaces can be useful to help scholars to track changes in big projects._

_Authors: Luciano Frizzera, Stan Ruecker, Milena Radzikowska, Geoffrey Rockwell, Susan Brown and the INKE Research Group_

## Introduction

Many projects in the digital humanities involve either digitization or enrichment of existing digital materials. In both these cases, the process can be understood as a workflow. Similarly, in an editorial project, the raw text has to be entered, then it has to be encoded, proofed and tested in a publication environment. Once again, there is a process or workflow to be followed. So, we were interested in producing a workflow management tool that could be used by people in the digital humanities.

In general, a workflow management tool is a structured checklist, composed of a collection of stages with transitions, including occasional decision points between them.

Numerous other systems exist for managing workflow in the context of digital text production. For example, there are workflows in the Public Knowledge Project for its Open Journal Systems and its Open Monograph Systems. Recent work in computing science has focused both on workflow analysis (_e.g._, Schroeder, 2009) and on algorithms for automatic layout (_e.g._, Albrecht, 2010).

We could think of a workflow manager as a kind of structured surface. According to Radzikowska, a structured surface is “a cognitive interface artifact that provides a layer of meaning that supports the data imposed upon it”. That is, the process could be represented by a surface, and the documents as tokens that move over the surface, like in a casino roulette. This strategy could also be used to provide the user with a set of analytic tools in the form of a data visualization.

The interfaces here seeks to retain the modularity and flexibility associated with workflow systems and combine them with a rich prospect visualization of the collection being managed. We proposed that structured surfaces would provide means for people to gain insight into their material while also providing them some ways of formulating an argument about the data.

## Earlier Stage

### Target

In the earlier stage of this project, we used a generic workflow from the world of journal editorship. Although, there wasn’t any real content at that time.

### Technology

At first, we choose to use web standards technologies such as HTML, CSS, and Javascript. So, we start this experiment with D3.js, an open source javascript library for creating data visualizations. The goal was to launch the workflow from JiTR, a collection management tool developed for such experiments.

### Design I

![Figure 1: First version of structured surface editorial workflow uses D3.js to build the interface.](../../assets/images/blog/Milena-workflow-surface-v03b-494x310.png) Figure 1: First version of structured surface editorial workflow uses D3.js to build the interface.

We have used a pipe-and-flow type of workflow as the surface for organizing the status of documents (figure 1). It begins on the left side where each of the documents is accepted and starts its life in the workflow. Each stage of the process, represented by a rectangle, is a milestone such as decision points, in-progress work and stand-by moments. The colors reflect the status in the workflow: work in progress (dark grey); needs revision (yellow); rejected (red); accepted (green).

The articles are represented by tokens. The position indicates the stage of the article in the workflow; the size illustrates the length of the documents in words. A rollover of the token shows a list of information containing: the title of the article, an abstract, name and contact information of the reviewer, and the date when the article went to the reviewer.

### Development results I

What we found with this experiment was that the majority of the information is contained in the structured surface, with very little in the tokens. We wondered for our next iteration if it might be useful to explore placing more of the information in the tokens, which would allow us to use surfaces that were less prone to becoming cluttered.

In terms of technology, we also identified a limitation. SVG does not support automatic line breaking or word wrapping. Since D3.js uses SVG to render graphics on the screen and we want to show multiple lines of information, we decided to look for other options to satisfy our research interests.

## Orlando Workflow

For our second prototype, we decide to move the experiment to Adobe Flash to see if this tool would give us more flexibility. We also decided to produce an experiment with more meaningful data, so we partnered with Susan Brown and The Orlando Project. We use some of their editorial jobs, which include the writing of XML-encoded original material for Orlando biocritical entries on women writers.

### Design II

As we are now working with a predefined workflow, the flowchart had to be redesigned. The stages are still represented by rectangles, but now they are primarily placeholders for documents.

![Figure 2: Orlando Workflow is the second version of a structured surface workflow.](../../assets/images/blog/workflow_orlando_v4-494x279.jpg) Figure 2: Orlando Workflow is the second version of a structured surface workflow.

The workflow loads the collection of documents and retrieves the metadata. Based on this information, the documents, represented by tokens, are positioned in the workflow. The tokens are color coded in order to show status information: Start (White); Work in progress (Blue); Incomplete (Red); Completed (Green). A counter box shows the number of documents held at each stage (Figure 2).

As in the first prototype, a balloon showing the title of the document pops up when the user clicks on it. However, what happens in the second prototypes is that more details are available about each token. A double click makes the token bigger revealing a circular control panel and general information such as title, collection and current stage and status of the document.

The control panel gives access to a History Log, which shows the document's progress in the workflow; a Status Switcher, enabling the user to change the status information; and a Tag Mark, making easier to follow the token through the workflow.

It is also possible to drag the token to any other stage. By doing that, the user automatically changes the stage and also the status of the document. Every modification performed in the workflow is auto-saved and generates a new log entry in the history.

### Development results II

Some issues arose during the process of development of this version. The most important was the high density of tokens inside a stage, where the overlap can make it challenging to find and access information.

### Future Directions

For the next versions, we are planning to implement features to enhanced the user experience and the awareness of the system such as zooming interface, that could solve issues regarding the high density of the tokens; collapsing stages to simplify the flowchart; notification center to help the user to keep track of updates.

However, we have yet to perform usability tests in order confirm our assumptions and the interface effectiveness.

## Conclusion

In short, this experiment presented a prototype of a workflow interface for editorial process management that can serve not only for research purposes but also to inform the development of other projects, such as the CWRC environment.

## References

Albrecht, Benjamin, Philip Effinger, Markus Held, and Michael Kaufmann. 2010. An automatic layout algorithm for BPEL processes. In Proceedings of the 5th international symposium on Software visualization (SOFTVIS '10). ACM, New York, NY, USA, 173-182. DOI=10.1145/1879211.1879237 [http://doi.acm.org.login.ezproxy.library.ualberta.ca/10.1145/1879211.1879237](http://doi.acm.org.login.ezproxy.library.ualberta.ca/10.1145/1879211.1879237).

Canadian Writing Research Collaboratory. [http://www.cwrc.ca](http://www.cwrc.ca)

Open Journal Systems Documentation. [pkp.sfu.ca/files/OJSinanHour.pdf](pkp.sfu.ca/files/OJSinanHour.pdf)

Open Monograph Project. [http://pkp.sfu.ca/omp](http://pkp.sfu.ca/omp)

Orlando Project. [http://www.ualberta.ca/orlando](http://www.ualberta.ca/orlando) [http://orlando.cambridge.org](http://orlando.cambridge.org)

Radzikowska, Milena, Stan Ruecker, Susan Brown, Peter Organisciak, and the INKE Research Group. “Structured Surfaces for JiTR.” Paper presented at the Digital Humanities 2011 conference. Stanford, June 19-21, 2011.

Ruecker, Stan, Milena Radzikowska, and Stéfan Sinclair. Visual Interface Design for Digital Cultural Heritage: A Guide to Rich-Prospect Browsing. Farnham, Surrey: Ashgate Publishing, 2011.

Schroeder, Will. 2009. “New tools for task workflow analysis.” In Proceedings of the 27th international conference extended abstracts on Human factors in computing systems (CHI EA '09). ACM, New York, NY, USA, 3877-3882. DOI=10.1145/1520340.1520587 [http://doi.acm.org.login.ezproxy.library.ualberta.ca/10.1145/1520340.1520587](http://doi.acm.org.login.ezproxy.library.ualberta.ca/10.1145/1520340.1520587).

W3C. SVG-Text 1.1. [http://www.w3.org/TR/SVG/text.html](http://www.w3.org/TR/SVG/text.html)

—————

_This work was presented in a panel session at SDH-SEMI 2012 in Waterloo, Canada._

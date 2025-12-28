---
title: "YouTube Video Recommendations during 2018 Ontario Elections"
coverImage: "Youtube-Ontario-Elections-Rankflow-1024x576-e1528383368520.png"
description: "This study, the first of its kind, has identified the most recommended videos by YouTube for the pre-writ period from April 3 to May 8, 2018. Data was collected through tools developed by Guillaume Chaslot and the Algo Transparency project."
publishedAt: "2018-06-07"
status: "published"
featured: true
author: Luciano Frizzera
keywords:
  - algorithmic culture
  - algorithmic media
  - brazil
  - elections
  - youtube
  - self
---

What videos does YouTube recommend about Ontario party leaders? In the first study of its kind, we have identified the most recommended videos by YouTube for the pre-writ period from April 3 to May 8, 2018. Data was collected through tools developed by Guillaume Chaslot and the Algo Transparency project.

_Originally posted at: [https://www.amo-oma.ca/en/youtube-recommendations-for-the-ontario-party-leaders-during-the-election-period/](https://www.amo-oma.ca/en/youtube-recommendations-for-the-ontario-party-leaders-during-the-election-period/)_

_See the visualization here: [https://rankflow-ontario-elections-2018.lucianofrizzera.com/](https://rankflow-ontario-elections-2018.lucianofrizzera.com/)_

After watching any video on YouTube, the platform automatically recommends other videos based on a ranking produced by a deep learning neural network. Like search results, recommendations are a judgment made by a platform about the relevance of content. In recent months, The Guardian, The Washington Post and the New York Times have raised concerns about YouTube’s judgment. Its recommendation system might promote harmful or disturbing content particularly on YouTube Kids, their platform for young audiences. Data + Society, a US-based research centre, has also observed YouTube recommending extreme content based on benign queries.

We cannot know for sure what has caused these recommendations. Likely the recommendations are a combination of public opinion, algorithmic design and possibly the work of partisan communities amplifying certain voices (also called media manipulation). This study prototypes a political discoverability audit, a tool to assess what content is being recommended online before and during an election, that has been called for in the lead-up to elections. These audits could become an important tool in understanding the role of social media platforms in elections

## Highlights

1. Mainstream media, particularly The Agenda, are the most recommended channels on YouTube (see Figure 2) suggesting that recommendations function as a tool of news discovery.
2. Channels critical of the Liberal government and seemingly right of center (Steeper33 and Poletical) are the only partisan sources in the top 10. Videos from these channels were top recommendations during the pre-writ period
3. Videos critical of Kathleen Wynne are top recommendations for both Doug Ford and Kathleen Wynne.
4. Top video for most leaders? Doug Ford’s question to Kathleen Wynne, “when did you lose your way?”, from City News Debate.

## Context

What videos does YouTube recommend about Ontario party leaders? In the first study of its kind, we have identified the most recommended videos by YouTube for the election period from May 9 to June 2, 2018. Data was collected through tools developed by [Guillaume Chaslot](https://algotransparency.org/?candidat=is%20the%20earth%20flat%20or%20round?&file=ytrecos-science-2018-06-01) and the [Algo Transparency project](https://algotransparency.org/).

## Visualizations

The three interactive graphics allow you to explore YouTube’s recommendations for each of the leaders. Please be patient as the visualizations take time to load.

1. Most recommended videos per leader (see Tabs)
2. Top channels, or video producers, for all candidates
3. Top recommendations per day. This visualization is a little complex. Each line represents a video as it changes position in the top 10 day by day, but helps you understand the stability of video recommendations over time.

<iframe loading="lazy" src="https://rankflow-ontario-elections-2018.lucianofrizzera.com/" width="100%" height="1800"></iframe>

## Limitations

Recommendations were only collected from one computer-based in Montreal. We acknowledge that recommendations may vary depending on user profiles and locations. Future research needs to study these systems from multiple computers. These findings have not been subject to peer review. Research is on-going.

## Methodology

### Data Collection

We collected recommendations using a Python script developed by Guillaume Chaslot as part of the Algo Transparency project. The script starts with a search query on YouTube to follow and store the list of recommended videos related to the topic of interest. More specifically, the script 1) gets the \[N\] first search results, 2) follows the first \[M\] recommendations, 3) repeats step (2) \[P\] times, and 4) stores the results in a JSON file.

For this research we collected six relevant terms connected to the 2018 Ontario Elections: two broad terms to get the big picture on the elections (“Ontario Politics” and “Ontario Election”); and four specific terms, which are the names of the main candidates (“Kathleen Wynne”, “Doug Ford”, “Andrea Horwath”, “Mike Schreiner”). The collection was made manually running the script every day between 8 and 10 pm, from May 9 to June 8, 2018. We choose to have a narrow but deep look into the recommendation system. Thus we set the algorithm to follow the first four recommended videos and repeat the operation four times for each searched term. This is analogous of a person searching for a topic on YouTube, opening the first four videos, and sequentially following the first four recommended videos for each one of them, repeating the operation four times in the videos that come out from each new recommendation list.

This algorithm does not rely on YouTube public API. Instead, it simulates the browser environment, loading and scraping HTML elements present at the YouTube search and watch page. This makes the data collection less prone to social bias, such as user profiling using personal preferences, browser history, and cookies. However, it does not remove all the variable that might disturb the recommendation ranking, such as the location, language, the time of the day, and the machine used in this process, as well as other variables not revealed by YouTube.

Each daily search produces a JSON file containing the data for all the six terms. The files are merged into a single dataset, from which new information is derived (e.g., total time a video was recommended during the period), and the data is organized to create a rank flow visualization.

### Visualization

Inspired by Bernhard Rieder’s work, we developed a RankFlow visualization that shows a rank of the most recommended videos per day during the period. Built using D3.js, the visualization displays all videos that reached at least one of the top 5 positions in the rank at any given day of the observed period. The thickness of the line works as a reinforced visual cue for the rank position measure on the vertical axis, and it is set by the best position the video was ranked in the period. By clicking on each line, it is possible to watch the video in context, as well as check the basic metrics (view, likes, dislikes, number of recommendation) per day. Accompanying the graph, there is ranked table listing all videos collected on each searched term.

The rank flow allows the analysis of the evolution of each video in the rank, find trends, and observe what has been recommended. This might give us some insights about how YouTube rank system works, what are the most prominent videos on specific topics, and what narrative this rank bring to the political debate in Canada.

The graphs are colour coded by the channel that posted the video, which adds another possible dimension to the analysis: Who produces the videos about each searched term? Is there a dominant channel in the period or the video ecology is diverse?

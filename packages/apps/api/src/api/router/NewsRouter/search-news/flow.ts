import { type RouteFlowType } from "../../utils";
import { type SearchNewsParamsType } from "./params";
import { type SearchNewsResults, successResponse } from "./response";
import type { IGetManyResponse, INewsResultType } from "~api/types";
import searchContent from "~api-root/api/services/news/combined/searchContent";

const first: INewsResultType[] = [
  {
    url: "https://www.nytimes.com/2023/09/16/world/middleeast/libya-dams-warnings.html",
    author: "Aaron Boxerman",
    title: "Dire Warnings About Libya Dams Went Unheeded",
    description:
      "“The state wasn’t interested,” said an engineer who published a paper on why Derna’s dams, after decades of postponed repairs, might fail under the stress of a powerful storm.",
    publishedAt: new Date("2023-09-16T09:02:21+0000"),
    imageUrl:
      "https://www.nytimes.com/images/2023/09/16/multimedia/16libya-dam-2-fkpm/16libya-dam-2-fkpm-articleLarge.jpg",
    source: "new-york-times",
    category: "football",
  },
  {
    url: "https://www.nytimes.com/2023/09/15/nyregion/law-97-building-pollution-nyc.html",
    author: "Hilary Howard",
    title:
      "New York’s New Anti-Pollution Law Is Here. Even Supporters Don’t Like It.",
    description:
      "Rules for Local Law 97, which curbs carbon emissions from large buildings, have come under fire as too lax or not lax enough.",
    publishedAt: new Date("2023-09-15T18:34:08+0000"),
    imageUrl:
      "https://www.nytimes.com/images/2023/09/14/multimedia/law97-01-kljf/law97-01-kljf-articleLarge.jpg",
    source: "new-york-times",
    category: "football",
  },
  {
    url: "https://www.nytimes.com/2023/09/15/opinion/wildfires-treeplanting-timebomb.html",
    author: "Claire Cameron",
    title:
      "We Thought We Were Saving the Planet, but We Were Planting a Time Bomb",
    description:
      "I spent a summer putting trees into the ground. Thirty years later, I watched my youthful idealism literally go up in smoke.",
    publishedAt: new Date("2023-09-15T09:02:28+0000"),
    imageUrl:
      "https://www.nytimes.com/images/2023/09/17/opinion/15cameron/15cameron-articleLarge-v2.jpg",
    source: "new-york-times",
    category: "football",
  },
  {
    url: "https://www.nytimes.com/2023/09/13/opinion/degrowth-superabundance-climate-change.html",
    author: "Peter Coy",
    title: "An Economic Case Against Environmental Doomsayers",
    description:
      "Amid the rise of the degrowth movement, two authors argue for the necessity of abundance.",
    publishedAt: new Date("2023-09-13T19:00:04+0000"),
    imageUrl:
      "https://www.nytimes.com/images/2023/09/13/opinion/13coy-image/13coy-image-articleLarge.jpg",
    source: "new-york-times",
    category: "football",
  },
  {
    url: "https://www.nytimes.com/2023/09/16/sports/gps-watches-professional-runners.html",
    author: "Scott Cacciola",
    title: "GPS Watch? No Thanks. Top Runners Are Ditching the Data.",
    description:
      "An increasing number of elite distance runners don’t wear activity tracking or GPS watches. They think they are better athletes because of it.",
    publishedAt: new Date("2023-09-16T07:00:45+0000"),
    imageUrl:
      "https://www.nytimes.com/images/2023/09/15/multimedia/15gps-watches-02-tqvl/15gps-watches-02-tqvl-articleLarge.jpg",
    source: "new-york-times",
    category: "football",
  },
  {
    url: "https://www.nytimes.com/2023/09/13/climate/floods-derna-libya.html",
    author: "Delger Erdenesanaa",
    title: "Why Floods Can Turn So Deadly, So Fast",
    description:
      "The flooding in Libya shows how climate, geography and other factors can collide with swift and disastrous results.",
    publishedAt: new Date("2023-09-13T20:11:51+0000"),
    imageUrl:
      "https://www.nytimes.com/images/2023/09/13/multimedia/13CLI-DEADLYFLOODS-ghcp/13CLI-DEADLYFLOODS-ghcp-articleLarge.jpg",
    source: "new-york-times",
    category: "football",
  },
  {
    url: "https://www.nytimes.com/2023/09/13/us/politics/biden-climate-law-investment.html",
    author: "Jim Tankersley",
    title:
      "Biden’s Climate Law Is Reshaping Private Investment in the United States",
    description:
      "Lucrative tax incentives have fueled a surge in solar panels but failed to boost wind power, data from a new project show.",
    publishedAt: new Date("2023-09-13T09:03:50+0000"),
    imageUrl:
      "https://www.nytimes.com/images/2023/09/13/multimedia/13dc-IRA-invest-01-lmtj/13dc-IRA-invest-01-lmtj-articleLarge.jpg",
    source: "new-york-times",
    category: "football",
  },
  {
    url: "https://www.nytimes.com/2023/09/12/climate/billion-dollar-disasters.html",
    author: "Christopher Flavelle",
    title:
      "Record Number of Billion-Dollar Disasters Shows the Limits of America’s Defenses",
    description:
      "The country has been hit by 23 large-scale disasters since January, and hurricane season is far from over.",
    publishedAt: new Date("2023-09-12T15:36:53+0000"),
    imageUrl:
      "https://www.nytimes.com/images/2023/09/12/multimedia/12cli-BILLIONDOLLARDISASTERS-jtbw/12cli-BILLIONDOLLARDISASTERS-jtbw-articleLarge.jpg",
    source: "new-york-times",
    category: "football",
  },
  {
    url: "https://www.nytimes.com/2023/08/25/climate/panama-canal-drought-global-trade.html",
    author: "Somini Sengupta",
    title: "Climate Risks Loom Over Panama Canal, a Vital Global Trade Link",
    description:
      "Lack of rain and changing weather patterns are slowing the ship traffic that moves goods around the world.",
    publishedAt: new Date("2023-08-25T18:37:30+0000"),
    imageUrl:
      "https://www.nytimes.com/images/2023/08/25/multimedia/25CLI-drought-trade-03-pgqc/25CLI-drought-trade-02-pgqc-articleLarge.jpg",
    source: "new-york-times",
    category: "football",
  },
  {
    url: "https://www.nytimes.com/2023/09/12/climate/mount-rainier-glaciers-climate-change.html",
    author: "Somini Sengupta",
    title: "The ‘Forever’ Glaciers of America’s West Aren’t Forever Anymore",
    description:
      "Climate change is melting the ice on Mount Rainier. The environmental effects will be widespread, a Park Service study warned.",
    publishedAt: new Date("2023-09-12T14:09:48+0000"),
    imageUrl:
      "https://www.nytimes.com/images/2023/09/12/multimedia/12CLI-Rainier-01-cgbv/12CLI-Rainier-01-cgbv-articleLarge.jpg",
    source: "new-york-times",
    category: "football",
  },
  {
    url: "https://gizmodo.com/cancer-increasing-for-under-50-study-1850812960",
    author: "Ed Cara",
    title: "Cancer Is Becoming a Bigger Problem for the Young",
    description:
      "Cancer cases and deaths in younger people have substantially increased globally over time, new research out this week has found. The study shows that the reported incidence of cancer in people under the age of 50 has climbed between 1990 to 2019. The authors …",
    publishedAt: new Date("2023-09-07T16:50:00Z"),
    imageUrl:
      "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/1e0fdf992407ea6976740acaa95df954.jpg",
    source: "news-api",
    category: "football",
  },
  {
    url: "https://www.androidcentral.com/apps-software/oneplus-11-oxygenos-14-first-beta",
    author: "tips@androidcentral.com (Vishnu Sarangapurkar)",
    title: "OnePlus 11 gets its first OxygenOS 14 beta in the US and India",
    description:
      "Ahead of the global release of the OxygenOS 14, the company brings its first beta to the OnePlus 11",
    publishedAt: new Date("2023-09-13T01:45:47Z"),
    imageUrl:
      "https://cdn.mos.cms.futurecdn.net/RtowDDWMcVnrHBeS38t9mY-1200-80.jpg",
    source: "news-api",
    category: "football",
  },
  {
    url: "https://design-milk.com/?p=516162",
    author: "Kelly Beall",
    title:
      "Basurto Stool Collection: A Fusion of Mexican Creativity + Global Design",
    description:
      "Colección Estudio x Difane translate Mexico City's architectural history through their collaborative Basurto Stool Collection.",
    publishedAt: new Date("2023-09-05T14:00:24Z"),
    imageUrl:
      "https://design-milk.com/images/2023/08/Barsuto-Stool-Collection-Collection-Estudio-x-Difane-Low-Stool-White-Oak-Trio-Photo-Fabian-Martinez-3.jpg",
    source: "news-api",
    category: "football",
  },
  {
    url: "https://markets.businessinsider.com/news/commodities/americans-sell-barbies-sports-collectibles-inflation-interest-rates-2023-8",
    author: "ztayeb@businessinsider.com (Zahra Tayeb)",
    title:
      "Barbies for $5,000, rare New York Rangers collectibles for $30,000 – hard-up Americans are selling their treasure hoards to get by",
    description:
      "Luckily, the global collectibles industry is a lucrative one with sales projected to hit $1 trillion by 2033.",
    publishedAt: new Date("2023-08-18T09:00:32Z"),
    imageUrl:
      "https://i.insider.com/64de28b14ef9f30019f904e8?width=1200&format=jpeg",
    source: "news-api",
    category: "football",
  },
  {
    url: "https://www.bbc.co.uk/news/business-66714132",
    author: "https://www.facebook.com/bbcnews",
    title: "Chevron and unions in talks to avert Australia LNG strike",
    description:
      "Workers are scheduled to begin a series of stoppages from Thursday in the dispute over pay and conditions.",
    publishedAt: new Date("2023-09-06T03:34:26Z"),
    imageUrl:
      "https://ichef.bbci.co.uk/news/1024/branded_news/81FF/production/_130997233_wheatstone-lng-first-cargo-departs-for-japan-d.jpg",
    source: "news-api",
    category: "football",
  },
  {
    url: "https://gritdaily.com/john-matteras-vision-for-a-global-private-exchange/",
    author: "GRIT DAILY",
    title:
      "John Mattera’s Vision for a Global Private Exchange to Transform the Industry",
    description:
      "The traditional investment landscape is facing a paradigm shift as global private exchange platforms rise to prominence. Addressing long-standing challenges […]\nThe post John Mattera’s Vision for a Global Private Exchange to Transform the Industry appeared fi…",
    publishedAt: new Date("2023-09-06T15:00:41Z"),
    imageUrl:
      "https://readwrite.com/wp-content/uploads/2023/09/Global-Private-Exchange.jpg",
    source: "news-api",
    category: "politics",
  },
  {
    url: "https://www.androidcentral.com/phones/nokia-manufacturer-hmd-global-making-its-own-phones",
    author: "michael.hicks@futurenet.com (Michael L Hicks)",
    title:
      "The company that makes Nokia phones is spinning off its own branded phones",
    description:
      "HMD Global owns the Nokia brand for manufacturing smartphones until 2026. Between now and then, it wants to start raising awareness of the HMD brand instead.",
    publishedAt: new Date("2023-09-13T01:05:40Z"),
    imageUrl:
      "https://cdn.mos.cms.futurecdn.net/WvWdw4g2c84tbtMTAE23nB-1200-80.jpg",
    source: "news-api",
    category: "politics",
  },
  {
    url: "https://www.businessinsider.com/recession-outlook-soft-landing-interest-rates-inflation-unemployment-morgan-stanley-2023-8",
    author: "George Glover",
    title:
      "The US is likely to dodge a recession in a dream soft-landing scenario, Morgan Stanley's top economist says",
    description:
      '"Boy, the data are surprising to the upside," the bank\'s global chief economist Seth Carpenter said Wednesday.',
    publishedAt: new Date("2023-08-31T11:41:46Z"),
    imageUrl:
      "https://i.insider.com/64f06a677e544d0019fbc241?width=1200&format=jpeg",
    source: "news-api",
    category: "politics",
  },
  {
    url: "https://www.businessinsider.com/chinas-manufacturing-sector-contracts-for-the-fifth-consecutive-month-economy-2023-8",
    author: "Joseph Wilkins",
    title: "China's economic woes mount as manufacturing continues to shrink",
    description:
      "China's factories have been struggling for months because of a slump in global demand and reduced domestic consumer spending.",
    publishedAt: new Date("2023-08-31T10:24:22Z"),
    imageUrl:
      "https://i.insider.com/64f056f17e544d0019fbb4b1?width=1200&format=jpeg",
    source: "news-api",
    category: "politics",
  },
  {
    url: "https://www.businessinsider.com/us-economic-outlook-2024-risks-signs-struggle-torsten-slok-2023-9",
    author: "Madison Hoff,Noah Sheidlower",
    title: "10 signs the US economy may struggle in the next year",
    description:
      "Torsten Sløk, chief economist at Apollo Global Management, shared at an economic forum several risks to the nation's economic outlook.",
    publishedAt: new Date("2023-09-14T18:08:54Z"),
    imageUrl:
      "https://i.insider.com/6501ee45992da60019eb9f71?width=1200&format=jpeg",
    source: "news-api",
    category: "politics",
  },
];

const second: INewsResultType[] = [
  {
    url: "https://www.nytimes.com/2023/09/10/us/mel-tucker-michigan-football-sexual-harassment.html",
    author: "Chris Cameron",
    title:
      "Michigan State Suspends Football Coach Amid Sexual Harassment Allegations",
    description:
      "Mel Tucker, the head coach, is accused of harassing Brenda Tracy, who speaks out against sexual violence in college sports, according to a report in USA Today.",
    publishedAt: new Date("2023-09-10T23:19:59+0000"),
    imageUrl:
      "https://www.nytimes.com/images/2023/09/11/multimedia/10xp-coach-print-kmjc/10xp-coach-kmjc-articleLarge.jpg",
    source: "new-york-times",
    category: "politics",
  },
  {
    url: "https://www.nytimes.com/2023/09/07/sports/football/australian-punters-football.html",
    author: "Jeré Longman",
    title: "Australian Punters Are Putting a New Spin on Football",
    description:
      "The tricky curves and crafty bounces of their kicks, honed by Australian football and rugby, have changed the way punt returners are coached.",
    publishedAt: new Date("2023-09-07T09:02:05+0000"),
    imageUrl:
      "https://www.nytimes.com/images/2023/09/07/multimedia/07aussie-punters-vhgt/07aussie-punters-vhgt-articleLarge.jpg",
    source: "new-york-times",
    category: "politics",
  },
  {
    url: "https://www.nytimes.com/video/sports/football/100000009048047/michael-locksley-cte-maryland.html",
    author: "Kassie Bracken",
    title: "A Football Coach Walks the Line on C.T.E.",
    description:
      "Football gave the University of Maryland Coach Michael Locksley a scholarship, a family and a career. But it also likely contributed to his son’s C.T.E. diagnosis.",
    publishedAt: new Date("2023-08-28T14:55:01+0000"),
    imageUrl: "",
    source: "new-york-times",
    category: "politics",
  },
  {
    url: "https://www.nytimes.com/2023/07/01/sports/ncaafootball/college-football-realignment.html",
    author: "Billy Witz",
    title: "In the Conference Realignment Game, a Deadline Is Not a Deadline",
    description:
      "San Diego State had to make a decision about whether to leave the Mountain West Conference. It stayed put, but a move to the Pac-12 still beckons.",
    publishedAt: new Date("2023-07-01T22:47:12+0000"),
    imageUrl:
      "https://www.nytimes.com/images/2023/07/01/multimedia/01sdsu1-gjqb/01sdsu1-gjqb-articleLarge.jpg",
    source: "new-york-times",
    category: "politics",
  },
  {
    url: "https://www.nytimes.com/2023/09/15/world/europe/spain-womens-soccer-rubiales.html",
    author: "Rachel Chaundler",
    title:
      "Spain’s Women’s Team Demands Full Reorganization of National Federation",
    description:
      "The players’ demands came on a day that a restraining order was granted against Luis Rubiales, the former head of the federation, who forcibly kissed a star forward, Jennifer Hermoso.",
    publishedAt: new Date("2023-09-15T16:09:56+0000"),
    imageUrl:
      "https://www.nytimes.com/images/2023/09/15/multimedia/15spain-soccer-tgpf/15spain-soccer-tgpf-articleLarge.jpg",
    source: "new-york-times",
    category: "politics",
  },
  {
    url: "https://www.nytimes.com/2023/09/15/t-magazine/ernie-barnes.html",
    author: "Adam Bradley",
    title:
      "Millions Saw His Paintings on TV. In the Art World, His Work Still Went Unnoticed.",
    description:
      "In his lifetime, Ernie Barnes was largely dismissed and ignored by the industry. He became an icon anyway.",
    publishedAt: new Date("2023-09-15T09:00:59+0000"),
    imageUrl:
      "https://www.nytimes.com/images/2023/09/15/t-magazine/15tmag-erniebarnes-slide-0TFK/15tmag-erniebarnes-slide-0TFK-articleLarge-v2.jpg",
    source: "new-york-times",
    category: "politics",
  },
  {
    url: "https://www.nytimes.com/2023/09/14/sports/football/nfl-sportsbook-washington-commanders.html",
    author: "Jenny Vrentas",
    title: "An N.F.L. Stadium Brings Sports Betting Inside",
    description:
      "A sports book inside the Washington Commanders’ stadium is the first of its kind in the N.F.L. and a symbol of the league’s wholehearted — and profitable — embrace of gambling.",
    publishedAt: new Date("2023-09-14T04:01:14+0000"),
    imageUrl:
      "https://www.nytimes.com/images/2023/09/13/multimedia/13nfl-betting-01-vjmt/13nfl-betting-01-vjmt-articleLarge.jpg",
    source: "new-york-times",
    category: "politics",
  },
  {
    url: "https://www.nytimes.com/2023/09/14/world/europe/spain-womens-soccer-strike.html",
    author: "Rachel Chaundler",
    title: "Players in Spain’s Women’s League Call Off Strike",
    description:
      "The breakthrough in the labor dispute, which has delayed the start of the season and has added to a turbulent period in Spanish soccer, was an agreement over minimum pay.",
    publishedAt: new Date("2023-09-14T14:54:31+0000"),
    imageUrl:
      "https://www.nytimes.com/images/2023/09/14/multimedia/14spain-soccer01sub-glkm/14spain-soccer01sub-glkm-articleLarge.jpg",
    source: "new-york-times",
    category: "politics",
  },
  {
    url: "https://www.nytimes.com/2023/09/14/sports/soccer/afghanistan-womens-soccer-khalida-popal.html",
    author: "Juliet Macur",
    title:
      "They Shot at Her. They Forced Her From Her Home. She Won’t Stop Fighting for Girls.",
    description:
      "Khalida Popal helped save Afghan female soccer players from the Taliban. Now she is demanding that world soccer officials let them play for their country again.",
    publishedAt: new Date("2023-09-14T04:00:35+0000"),
    imageUrl:
      "https://www.nytimes.com/images/2023/09/01/multimedia/00afghansoccer-khalida-top-tlwm/00afghansoccer-khalida-top-tlwm-articleLarge.jpg",
    source: "new-york-times",
    category: "politics",
  },
  {
    url: "https://www.nytimes.com/2023/09/12/sports/football/milwaukee-pub-jets-rodgers-loss.html",
    author: "Jesus Jiménez",
    title: "Fans Bet Their Bar Tabs on the Jets Losing. It Wasn’t a Safe Bet.",
    description:
      "A bar in Wisconsin, where Aaron Rodgers played for years, offered free drinks if the New York Jets lost on Monday. But after a surprising comeback, patrons were left to pay their tabs.",
    publishedAt: new Date("2023-09-13T01:11:03+0000"),
    imageUrl:
      "https://www.nytimes.com/images/2023/09/12/multimedia/12xp-jetsbar-ctfj/12xp-jetsbar-ctfj-articleLarge.jpg",
    source: "new-york-times",
    category: "politics",
  },
  {
    url: "https://www.cnet.com/tech/services-and-software/nfl-2023-how-to-watch-and-stream-games-redzone-and-more-with-or-without-cable/",
    author: "Eli Blumenthal",
    title:
      "NFL 2023: How to Watch and Stream Games, RedZone and More, With or Without Cable - CNET",
    description:
      "Football is back this week, with more ways to watch and stream live games than ever. Here are the best services for every fan.",
    publishedAt: new Date("2023-09-04T13:00:10Z"),
    imageUrl:
      "https://www.cnet.com/a/img/resize/570bd4ab88e5d8c80241a00454183f503a73d85f/hub/2023/08/28/662b336d-a63f-47c4-bc5d-c80b4ce9754f/gettyimages-1626294465.jpg?auto=webp&fit=crop&height=675&width=1200",
    source: "news-api",
    category: "dance",
  },
  {
    url: "https://www.theverge.com/2023/9/3/23857501/disney-charter-spectrum-espn-blackout-cable-carriage-dispute",
    author: "Wes Davis",
    title: "Disney blames Charter for the ESPN blackout",
    description:
      "Disney responds to reports of its channel embargo on Spectrum that cut off subscribers from ESPN and other channels, accusing Charter of not wanting to pay its share for Disney’s content.",
    publishedAt: new Date("2023-09-03T17:44:06Z"),
    imageUrl:
      "https://cdn.vox-cdn.com/thumbor/skpHgASbCIS84nmHSIzac19WYXM=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/24785141/STK157_Disney_01.jpg",
    source: "news-api",
    category: "dance",
  },
  {
    url: "https://www.businessinsider.com/tommy-tuberville-net-worth-financial-disclosures-2023-8",
    author: "Madison Hall",
    title:
      "Sen. Tommy Tuberville is worth at least $4.5 million, according to his financial disclosures",
    description:
      "After a 36-year college football coaching career including a high-profile stint at Auburn, Sen. Tommy Tuberville joined the Senate in 2021.",
    publishedAt: new Date("2023-09-02T15:00:01Z"),
    imageUrl:
      "https://i.insider.com/64ed00063c42320019c04c47?width=1200&format=jpeg",
    source: "news-api",
    category: "dance",
  },
  {
    url: "https://www.businessinsider.com/supreme-court-case-high-school-football-coach-praying-field-again-2023-9",
    author: "Associated Press",
    title:
      "After winning his Supreme Court case, a high school football coach has been rehired and is back to praying on the field again",
    description:
      "After the Supreme Court sided with Joe Kennedy, the high school football coach was rehired and kneeled on the field in prayer after Friday's game.",
    publishedAt: new Date("2023-09-03T15:30:58Z"),
    imageUrl:
      "https://i.insider.com/64f49c451b7ced0019c78d41?width=1200&format=jpeg",
    source: "news-api",
    category: "dance",
  },
  {
    url: "https://www.businessinsider.com/best-college-football-towns-for-airbnb-vrbo-rentals-2023-9",
    author: "Dan Latu",
    title:
      "The 9 best college football towns for investing in short-term rentals",
    description:
      "Analytics site AirDNA ranked the best college football towns to invest in Airbnbs and Vrbos, taking into account rates, competition, and occupancy.",
    publishedAt: new Date("2023-09-13T19:56:44Z"),
    imageUrl:
      "https://i.insider.com/6501e76b1afe8f0019e9aefc?width=1200&format=jpeg",
    source: "news-api",
    category: "dance",
  },
  {
    url: "https://www.businessinsider.com/guides/streaming/how-to-watch-thursday-night-football-free-live-stream",
    author: "Quentyn Kennemer",
    title:
      "How to watch Thursday Night Football for free: Eagles vs. Vikings live stream",
    description:
      "Here's where to watch Thursday Night Football live streams for free. Eagles vs. Vikings play this Thursday, courtesy of Amazon Prime Video.",
    publishedAt: new Date("2023-09-14T21:00:01Z"),
    imageUrl:
      "https://i.insider.com/6503671e2a72d60019d55848?width=1200&format=jpeg",
    source: "news-api",
    category: "dance",
  },
  {
    url: "https://www.bbc.co.uk/news/world-latin-america-66706055",
    author: "https://www.facebook.com/bbcnews",
    title:
      "Gilberto Hernández: Panama national team footballer killed by gunmen",
    description:
      'Gilberto Hernández\'s father urged young people to "stop the violence" after the death of his son.',
    publishedAt: new Date("2023-09-04T10:13:10Z"),
    imageUrl:
      "https://ichef.bbci.co.uk/news/1024/branded_news/B4E4/production/_130980364_gettyimages-1249160853.jpg",
    source: "news-api",
    category: "dance",
  },
  {
    url: "https://www.cnet.com/tech/home-entertainment/disney-yanks-espn-from-spectrum-what-you-need-to-know-about-the-channel-dispute/",
    author: "Mary-Elisabeth Combs",
    title:
      "Disney Yanks ESPN From Spectrum: What You Need to Know About the Channel Dispute - CNET",
    description:
      "A breakdown in negotiations led to viewers missing out on the US Open and college football, and many are wondering if ESPN will be back in time for NFL kickoff.",
    publishedAt: new Date("2023-09-05T19:31:00Z"),
    imageUrl:
      "https://www.cnet.com/a/img/resize/b6385368d390461441c2475248057bc8f8a0c0e8/hub/2021/10/21/e9c8086a-ed5c-4d5e-9ca6-d41b989ea401/silhouette-of-boy-in-front-of-television-screen-with-color-bars.jpg?auto=webp&fit=crop&height=675&width=1200",
    source: "news-api",
    category: "dance",
  },
  {
    url: "https://www.androidcentral.com/gaming/virtual-reality/nfl-pro-era-ii-announcement",
    author: "nicholas.sutrich@futurenet.com (Nicholas Sutrich)",
    title: "NFL PRO ERA II is taking VR football to the next level on Quest",
    description:
      "Debuting September 28 on Meta Quest and PlayStation VR 2, NFL PRO ERA II introduces multiplayer, brand-new and upgraded modes, new coaching features, and so much more.",
    publishedAt: new Date("2023-09-13T16:05:39Z"),
    imageUrl:
      "https://cdn.mos.cms.futurecdn.net/j4XTdDaqMoz3pPUCXPHHKa-1200-80.jpg",
    source: "news-api",
    category: "dance",
  },
  {
    url: "https://boingboing.net/2023/08/28/why-do-parents-still-let-kids-play-football.html",
    author: "Jason Weisberger",
    title: "Why do parents still let kids play football?",
    description:
      "Yet another study shows that repeated hits to the head are bad for people. One can start young, or later, but getting cracked in the skull over and over eventually results in Chronic Traumatic Encephalopathy. The interesting thing about the study isn't the \"n…",
    publishedAt: new Date("2023-08-28T17:05:32Z"),
    imageUrl:
      "https://i0.wp.com/boingboing.net/wp-content/uploads/2023/08/shutterstock_1071698618-scaled.jpg?fit=1200%2C871&ssl=1",
    source: "news-api",
    category: "dance",
  },
];

const third: INewsResultType[] = [
  {
    url: "https://www.nytimes.com/2023/09/16/theater/melissa-etheridge-my-window-broadway.html",
    author: "Sarah Bahr",
    title: "Melissa Etheridge Is Ready to Rewatch ‘Barbie’",
    description:
      "The singer, who brings her autobiographical show to Broadway this month, on her longtime love for the Kansas City Chiefs and what she’s looking forward to in New York.",
    publishedAt: new Date("2023-09-16T09:00:57+0000"),
    imageUrl:
      "https://www.nytimes.com/images/2023/09/24/arts/24myten-etheridge-web/24myten-etheridge-web-articleLarge.jpg",
    source: "new-york-times",
    category: "dance",
  },
  {
    url: "https://www.nytimes.com/2023/09/14/movies/mr-jimmy-zeppelin-obsessed.html",
    author: "Glenn Kenny",
    title: "‘Mr. Jimmy’ Review: Trying for That Perfect Page Re-Creation",
    description:
      "Akio Sakurai is obsessed with sounding exactly like the Led Zeppelin guitarist Jimmy Page. This documentary plumbs the depths of his devotion.",
    publishedAt: new Date("2023-09-14T11:00:15+0000"),
    imageUrl:
      "https://www.nytimes.com/images/2023/09/14/multimedia/14-MR-JIMMY-REVIEW-PIX1-wflh/14-MR-JIMMY-REVIEW-PIX1-wflh-articleLarge-v2.jpg",
    source: "new-york-times",
    category: "dance",
  },
  {
    url: "https://www.nytimes.com/2023/09/14/arts/music/corinne-bailey-rae-black-rainbows-review.html",
    author: "Jon Pareles",
    title: "Corinne Bailey Rae Breaks Free on ‘Black Rainbows’",
    description:
      "Inspired by art and artifacts, the English songwriter moves beyond pop on her fourth album.",
    publishedAt: new Date("2023-09-14T14:45:33+0000"),
    imageUrl:
      "https://www.nytimes.com/images/2023/09/14/multimedia/mqpj/mqpj-articleLarge.jpg",
    source: "new-york-times",
    category: "dance",
  },
  {
    url: "https://www.nytimes.com/2023/09/14/sports/baseball/tim-flannery-lunatic-fringe.html",
    author: "Scott Miller",
    title: "Baseball’s ‘Woke Hillbilly’ Had More Songs to Write",
    description:
      "Tim Flannery’s rollicking life as an athlete and a musician was nearly cut short by a staph infection. But one of baseball’s most unlikely characters found his way back.",
    publishedAt: new Date("2023-09-14T15:00:23+0000"),
    imageUrl:
      "https://www.nytimes.com/images/2023/09/08/multimedia/00mlb-flannery-lead-kbcq/00mlb-flannery-lead-kbcq-articleLarge-v4.jpg",
    source: "new-york-times",
    category: "dance",
  },
  {
    url: "https://www.nytimes.com/2023/09/13/arts/music/larry-chance-dead.html",
    author: "Sam Roberts",
    title:
      "Larry Chance, Who Helped Keep Doo-Wop Alive for Decades, Dies at 82",
    description:
      "His career began in 1957, when he and some friends from the Bronx formed the vocal group that would become the Earls. He recorded his last song 65 years later.",
    publishedAt: new Date("2023-09-13T21:36:53+0000"),
    imageUrl:
      "https://www.nytimes.com/images/2023/09/15/obituaries/11Chance1-print1-SUB/11Chance1-articleLarge.jpg",
    source: "new-york-times",
    category: "dance",
  },
  {
    url: "https://www.nytimes.com/2023/09/13/arts/music/alexandre-kantorow-gilmore-artist-award.html",
    author: "Javier Hernández",
    title: "French Pianist Wins Surprise, Prestigious $300,000 Award",
    description:
      "Alexandre Kantorow, 26, joins an esteemed group of pianists who have won the Gilmore Artist Award, which is given every four years.",
    publishedAt: new Date("2023-09-13T18:00:10+0000"),
    imageUrl:
      "https://www.nytimes.com/images/2023/09/16/multimedia/13gilmore-jqwc/13gilmore-jqwc-articleLarge.jpg",
    source: "new-york-times",
    category: "dance",
  },
  {
    url: "https://www.nytimes.com/2023/09/13/arts/music/len-chandler-dead.html",
    author: "Neil Genzlinger",
    title: "Len Chandler, an Early Fixture of the Folk Revival, Dies at 88",
    description:
      "A singer who performed alongside Bob Dylan, Joan Baez and Pete Seeger, he was known for his topical songs, some of which he wrote in minutes.",
    publishedAt: new Date("2023-09-13T17:17:27+0000"),
    imageUrl:
      "https://www.nytimes.com/images/2023/09/14/obituaries/07Chandler-1-print1/07Chandler-1-articleLarge.jpg",
    source: "new-york-times",
    category: "dance",
  },
  {
    url: "https://www.nytimes.com/2023/09/14/arts/music/rolling-stones-hackney-diamonds.html",
    author: "Jon Pareles",
    title: "The Rolling Stones on Starting Up Again",
    description:
      "The band opens up about how its first album of new songs since 2005, and first since the death of Charlie Watts, recharges the partnership of Mick Jagger and Keith Richards.",
    publishedAt: new Date("2023-09-14T09:01:11+0000"),
    imageUrl:
      "https://www.nytimes.com/images/2023/09/17/arts/17NEW-STONES-PROMO/17NEW-STONES-PROMO-articleLarge.jpg",
    source: "new-york-times",
    category: "dance",
  },
  {
    url: "https://www.nytimes.com/2023/08/29/arts/music/amplifier-newsletter-summer-concerts.html",
    author: "Unknown",
    title: "A Summer of Live Music, From Stadiums to Clubs",
    description: "Hear songs from Beyoncé, Alvvays, Mdou Moctar and more.",
    publishedAt: new Date("2023-08-29T18:00:04+0000"),
    imageUrl:
      "https://www.nytimes.com/images/2023/08/29/multimedia/29amplifier-hwpl/29amplifier-hwpl-articleLarge.jpg",
    source: "new-york-times",
    category: "dance",
  },
  {
    url: "https://www.nytimes.com/2023/09/12/arts/music/popcast-olivia-rodrigo-guts.html",
    author: "Unknown",
    title: "Olivia Rodrigo’s Songs About Growing Pains",
    description:
      "The 20-year-old singer-songwriter returns with “Guts,” an album informed by the opportunities and costs of her rapid rise.",
    publishedAt: new Date("2023-09-12T23:44:19+0000"),
    imageUrl:
      "https://www.nytimes.com/images/2023/09/13/podcasts/13popcast-deluxe/13popcast-deluxe-articleLarge.jpg",
    source: "new-york-times",
    category: "dance",
  },
  {
    url: "https://www.engadget.com/shures-new-aonic-50-headphones-have-spatial-audio-and-double-the-battery-life-160025565.html",
    author: "Billy Steele",
    title:
      "Shure's new Aonic 50 headphones have spatial audio and double the battery life",
    description:
      "Shure may not have changed much of the design of its Aonic 50 headphones for the second-generation version, but it did a lot of work on the inside to massively upgrade all-around performance. The company announced the new model today, a set of $349 premium no…",
    publishedAt: new Date("2023-08-31T16:00:25Z"),
    imageUrl:
      "https://s.yimg.com/ny/api/res/1.2/HEnHn5MDqJk1tQGVn1Cf_w--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2023-08/0b17b970-4803-11ee-a98e-98555ba8633e",
    source: "news-api",
    category: "dance",
  },
  {
    url: "https://gizmodo.com/spotify-tests-making-lyrics-a-premium-only-feature-1850807657",
    author: "Kevin Hurler",
    title: "Spotify Tests Making Lyrics a Premium-Only Feature",
    description:
      "Spotify giveth and taketh away: If you want to sing along to your favorite tunes, you’d better fork over $10.99 every month. The music streaming platform has revealed that it is testing a scheme to make lyrics a feature only available to Premium users on the …",
    publishedAt: new Date("2023-09-06T13:40:00Z"),
    imageUrl:
      "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/a06b540d6f1e77287132507e3ee9b94b.jpg",
    source: "news-api",
    category: "dance",
  },
  {
    url: "https://www.engadget.com/the-morning-after-the-voice-of-mario-is-stepping-away-from-games-after-nearly-three-decades-111640482.html",
    author: "Mat Smith",
    title:
      "The Morning After: The voice of Mario is stepping away from games after nearly three decades",
    description:
      'After voicing Mario for 27 years, Charles Martinet will no longer play the plumber. Nintendo announced in a tweet yesterday that he\'ll move into a newly created Mario Ambassador role and "continue to travel the world sharing the joy of Mario," the company sai…',
    publishedAt: new Date("2023-08-22T11:16:40Z"),
    imageUrl:
      "https://s.yimg.com/uu/api/res/1.2/avA_V4S_5AZz8IEondRKvQ--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://o.aolcdn.com/hss/storage/midas/20ca67d2ffbbbcb68cbfd8ba02b7d973/204506788/download+%285%29.jpeg.cf.jpg",
    source: "news-api",
    category: "dance",
  },
  {
    url: "https://www.wired.com/review/ultimate-ears-pro-ue-premier/",
    author: "Brent Rose",
    title:
      "Ultimate Ears Pro UE Premier Review: A Borderline Spiritual Experience",
    description:
      "Ultimate Ears Professional, the company that pioneered in-ear sound, has a new set of high-end (and high-priced) earphones called UE Premiere that are truly exemplary.",
    publishedAt: new Date("2023-08-24T13:00:00Z"),
    imageUrl:
      "https://media.wired.com/photos/64e66df3702d12429a5895c4/191:100/w_1280,c_limit/Ultimate-Ears-Premier-In-Ear-Monitors-Featured-Gear.jpg",
    source: "news-api",
    category: "dance",
  },
  {
    url: "https://www.macrumors.com/2023/09/11/youtube-music-homepod-integration/",
    author: "Juli Clover",
    title: "YouTube Music Integration May Be Coming to HomePod",
    description:
      "YouTube Music may soon be available directly on the HomePod and the HomePod mini through Siri integration, according to code hidden in the YouTube Music app that was discovered by software miner @aaronp613.\n\n\n\n\n\nThere is a section in the YouTube Music app tha…",
    publishedAt: new Date("2023-09-12T00:15:27Z"),
    imageUrl:
      "https://images.macrumors.com/t/JjxEUiy6GbKQnCRaVhhMzq8ebn0=/1600x/article-new/2023/09/youtube-music-logo.png",
    source: "news-api",
    category: "dance",
  },
  {
    url: "https://www.engadget.com/the-ai-generated-fake-drake-and-the-weeknd-track-is-not-eligible-for-a-grammy-200924948.html",
    author: "Stephanie Barnes",
    title:
      "The AI-generated fake Drake and The Weeknd track is 'not eligible' for a Grammy",
    description:
      "Recording Academy CEO Harvey Mason Jr. is setting the record straight. After Variety\r\n reported earlier this week that an AI-generated track\r\n echoing the voices of Drake and The Weeknd would be considered for a Grammy Award, Mason is insisting that’s not the…",
    publishedAt: new Date("2023-09-08T20:09:24Z"),
    imageUrl:
      "https://s.yimg.com/ny/api/res/1.2/J3t4Z2plm6PZOZ4S8uZEMA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2023-09/9c5d9dc0-4e82-11ee-bbff-1d557023dbc7",
    source: "news-api",
    category: "dance",
  },
  {
    url: "https://www.theverge.com/2023/8/21/23839961/apple-podcasts-subscription-analytics-linkfire-partnership",
    author: "Amrita Khalid",
    title:
      "Apple Podcasts now shows creators who’s really paying for their shows",
    description:
      "Apple Podcasts Connect will now show analytics on subscription shows. The company is also partnering with Linkfire and adding new delegated delivery services.",
    publishedAt: new Date("2023-08-21T16:00:00Z"),
    imageUrl:
      "https://cdn.vox-cdn.com/thumbor/6qjK0_3j9O7e30gOchnPdFw5H9w=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/23986636/acastro_STK461_03.jpg",
    source: "news-api",
    category: "sports",
  },
  {
    url: "https://www.androidcentral.com/streaming-tv/amazon-music-unlimited-gets-second-price-bump",
    author: "michael.hicks@futurenet.com (Michael L Hicks)",
    title: "Yet another music streaming service is getting a price bump",
    description:
      "For the second year in a row, Amazon is nickel-and-diming its Prime Music Unlimited customers with another $10 annual increase.",
    publishedAt: new Date("2023-08-16T19:48:49Z"),
    imageUrl:
      "https://cdn.mos.cms.futurecdn.net/uLwcHTe8UMpEXHMCFrSNR3-1200-80.jpg",
    source: "news-api",
    category: "sports",
  },
  {
    url: "https://www.businessinsider.com/how-tiktok-is-changing-music-industry",
    author: "Dan Whateley",
    title:
      "How TikTok is changing the music industry and the way we discover new, popular songs",
    description:
      "Here's how TikTok is changing and transforming the music industry. We've been tracking TikTok's ascent from social-media newcomer to music power player platform.",
    publishedAt: new Date("2023-08-22T17:00:46Z"),
    imageUrl:
      "https://i.insider.com/60d5f29b82c8960018af1f60?width=1200&format=jpeg",
    source: "news-api",
    category: "sports",
  },
  {
    url: "https://www.cnet.com/tech/services-and-software/amazon-music-unlimited-raises-prices-for-prime-members/",
    author: "Gael Fashingbauer Cooper",
    title: "Amazon Music Unlimited Raises Prices for Prime Members - CNET",
    description:
      "If you have an Amazon Music Unlimited family plan, you'll also pay more per month.",
    publishedAt: new Date("2023-08-16T19:57:00Z"),
    imageUrl:
      "https://www.cnet.com/a/img/resize/b3dbc9a956a17c59ad5f58046549a217d5986065/hub/2022/06/30/14a28420-bd3d-4d38-b413-588d4937131b/amazon-music-unlimited-logo.png?auto=webp&fit=crop&height=675&width=1200",
    source: "news-api",
    category: "sports",
  },
];

const fourth: INewsResultType[] = [
  {
    url: "https://www.nytimes.com/article/tropical-storm-katia-hurricane.html",
    author: "Judson Jones",
    title: "Tropical Depression Katia Continues to Weaken",
    description:
      "The storm had sustained winds of 35 miles per hour on Monday morning and was expected to dissipate.",
    publishedAt: new Date("2023-09-02T14:30:44+0000"),
    imageUrl:
      "https://www.nytimes.com/images/2023/09/02/multimedia/02xp-katia/02xp-katia-articleLarge.png",
    source: "new-york-times",
    category: "sports",
  },
  {
    url: "https://www.nytimes.com/2023/09/01/sports/sailing/bill-pinkney-dead.html",
    author: "Penelope Green",
    title:
      "Bill Pinkney, Globe-Circling Sailor Who Set a Racial Mark, Dies at 87",
    description:
      "He was the first Black person to sail alone by way of the arduous southern route, rounding the perilous Cape Horn and withstanding storms and loneliness.",
    publishedAt: new Date("2023-09-01T21:25:53+0000"),
    imageUrl:
      "https://www.nytimes.com/images/2023/09/03/multimedia/31Pinkney2-jvzg-print1/31Pinkney2-jvzg-articleLarge.jpg",
    source: "new-york-times",
    category: "sports",
  },
  {
    url: "https://www.nytimes.com/2023/08/30/science/titanic-shipwreck-lawsuit.html",
    author: "William Broad",
    title: "U.S. Seeks to Block Recovery of Titanic Artifacts",
    description:
      "Washington has gone to court to become a party to the salvage case involving the famous liner so it can stop any expedition it deems objectionable.",
    publishedAt: new Date("2023-08-30T21:28:08+0000"),
    imageUrl:
      "https://www.nytimes.com/images/2023/08/30/science/30TITANIC/30TITANIC-articleLarge.jpg",
    source: "new-york-times",
    category: "sports",
  },
  {
    url: "https://www.nytimes.com/2023/08/29/climate/gulf-mexico-wind-farm.html",
    author: "Lisa Friedman",
    title: "Offshore Wind Auction for the Gulf of Mexico Gets a Tepid Response",
    description:
      "The Biden administration has bet big on offshore wind. But the first-ever auction in the Gulf of Mexico attracted just two bidders.",
    publishedAt: new Date("2023-08-29T20:56:20+0000"),
    imageUrl:
      "https://www.nytimes.com/images/2023/08/29/multimedia/29cli-GULFWIND-pfzm/29cli-GULFWIND-pfzm-articleLarge.jpg",
    source: "new-york-times",
    category: "sports",
  },
  {
    url: "https://www.nytimes.com/2023/08/29/us/hurricane-idalia-path-south-carolina-georgia.html",
    author: "Judson Jones",
    title: "After Florida, Idalia Will Move Through the Southeast",
    description:
      "A hurricane warning was issued for coastal areas in Georgia and South Carolina ahead of the storm’s arrival.",
    publishedAt: new Date("2023-08-29T15:12:43+0000"),
    imageUrl:
      "https://www.nytimes.com/images/2023/08/29/multimedia/29Idalia-after-wednesday-jtwv/29Idalia-after-wednesday-jtwv-articleLarge.jpg",
    source: "new-york-times",
    category: "sports",
  },
  {
    url: "https://www.nytimes.com/2023/08/28/climate/waves-california-climate-change.html",
    author: "Livia Albeck-Ripka",
    title: "Waves Along California’s Coast Are Getting Bigger, Study Says",
    description:
      "Climate change is fueling storms that have increased the size and frequency of big waves, according to a recent study published by the Journal of Geophysical Research.",
    publishedAt: new Date("2023-08-28T16:29:09+0000"),
    imageUrl:
      "https://www.nytimes.com/images/2023/08/06/multimedia/00xp-surf-kqbg/00xp-surf-kqbg-articleLarge.jpg",
    source: "new-york-times",
    category: "sports",
  },
  {
    url: "https://www.nytimes.com/2023/08/14/opinion/ocean-temperature-climate-change.html",
    author: "Diana Nyad",
    title: "What It’s Like to Swim in an Ocean That’s 100 Degrees",
    description:
      "Ten years ago, I swam from Cuba to Florida. I couldn’t make that swim today.",
    publishedAt: new Date("2023-08-14T09:00:58+0000"),
    imageUrl:
      "https://www.nytimes.com/images/2023/08/14/multimedia/14nyad-zqfg/14nyad-zqfg-articleLarge.jpg",
    source: "new-york-times",
    category: "sports",
  },
  {
    url: "https://www.nytimes.com/2023/08/25/world/asia/fukushima-water-seafood-japan-china.html",
    author: "Mike Ives",
    title: "Seafood Is Safe After Fukushima Water Dump, but Some Won’t Eat It",
    description:
      "Sushi is among several shunned foods as Japan dumps treated radioactive water into the Pacific. Experts say the fear is irrational but understandable.",
    publishedAt: new Date("2023-08-25T09:11:51+0000"),
    imageUrl:
      "https://www.nytimes.com/images/2023/08/25/multimedia/25xp-sushi-beijing-wmgl/25xp-sushi-beijing-wmgl-articleLarge.jpg",
    source: "new-york-times",
    category: "sports",
  },
  {
    url: "https://www.nytimes.com/2023/08/24/climate/air-quality-satellite-nasa-tempo.html",
    author: "Delger Erdenesanaa",
    title: "A First Look From NASA’s New Air Pollution Satellite",
    description:
      "A new mission will provide hourly updates of air quality in the United States.",
    publishedAt: new Date("2023-08-24T20:16:08+0000"),
    imageUrl:
      "https://www.nytimes.com/images/2023/08/24/climate/24cli-airquality-03/24cli-airquality-03-articleLarge.jpg",
    source: "new-york-times",
    category: "sports",
  },
  {
    url: "https://www.nytimes.com/2023/08/23/science/biology-octopus-garden.html",
    author: "Katrina Miller",
    title: "Atop an Underwater Hot Spring, an ‘Octopus Garden’ Thrives",
    description:
      "The heat, a new study suggests, makes for an ideal breeding ground for these eight-legged animals.",
    publishedAt: new Date("2023-08-23T18:00:19+0000"),
    imageUrl:
      "https://www.nytimes.com/images/2023/08/23/autossell/23sci-octopus-vid1cover/23sci-octopus-vid1cover-articleLarge.jpg",
    source: "new-york-times",
    category: "sports",
  },
  {
    url: "https://www.npr.org/2023/09/14/1199481250/greenland-cruise-ship-aground-free",
    author: "The Associated Press",
    title:
      "A luxury cruise ship is pulled free 3 days after running aground in Greenland",
    description:
      "The luxury cruise ship MV Ocean Explorer was successfully pulled free at high tide after running aground above the Arctic Circle with 206 people on board.",
    publishedAt: new Date("2023-09-14T16:00:54Z"),
    imageUrl:
      "https://media.npr.org/assets/img/2023/09/14/ap23257266606444_wide-c86d9b7e17b5a2fc29727784b270981a462c4ae6-s1400-c100.jpg",
    source: "news-api",
    category: "sports",
  },
  {
    url: "https://www.npr.org/2023/08/20/1194919088/atlantic-hurricane-season-forecast-more-storms-are-expected",
    author: "Jonathan Franklin",
    title:
      "Tropical Storm Emily takes shape in the Atlantic, as storm activity starts to warm up",
    description:
      "As the season is nearing its peak, the Atlantic Ocean has suddenly become very active with several storms that meteorologists and weather forecasters are watching.",
    publishedAt: new Date("2023-08-20T19:22:25Z"),
    imageUrl:
      "https://media.npr.org/assets/img/2023/08/20/screenshot-2023-08-20-at-15-07-48-national-hurricane-center_wide-4a9d12b93cae194852791aa9dd6b182e2dc1ae6e-s1400-c100.png",
    source: "news-api",
    category: "sports",
  },
  {
    url: "https://www.businessinsider.com/new-planet-habitability-discoveries-nasa-james-webb-space-telescope-2023-9",
    author: "Morgan McFall-Johnsen",
    title:
      "Astronomers aren't crying 'aliens' yet, but NASA's James Webb Space Telescope is making this planet look a lot more habitable",
    description:
      "NASA's James Webb Space Telescope revealed that exoplanet K2-18 b may be an ocean world, and there's a chance it could harbor alien life.",
    publishedAt: new Date("2023-09-12T19:50:54Z"),
    imageUrl:
      "https://i.insider.com/6500b9ea1afe8f0019e8fb38?width=1200&format=jpeg",
    source: "news-api",
    category: "sports",
  },
  {
    url: "https://www.businessinsider.com/japan-release-fukushima-nuclear-disaster-radioactive-wastewater-treated-safe-2023-8",
    author: "Rupendra Brahambhatt",
    title:
      "Japan released treated wastewater from the Fukushima nuclear disaster into the ocean. Experts say it's safe, but one would avoid the fish.",
    description:
      "Japan is releasing treated water from the Fukushima nuclear disaster into the ocean. Some are concerned about the environmental impact but experts say it's safe.",
    publishedAt: new Date("2023-08-24T18:13:25Z"),
    imageUrl:
      "https://i.insider.com/64e7860452bc2d0019915da6?width=1200&format=jpeg",
    source: "news-api",
    category: "sports",
  },
  {
    url: "https://www.npr.org/2023/08/19/1194867016/lolita-orca-toki-miami-seaquarium-dies",
    author: "Juliana Kim",
    title:
      "Lolita, oldest orca held in captivity, dies before chance to return to the ocean",
    description:
      'After years of pressure to set the Miami Seaquarium orca free, Lolita was scheduled to spend her final days in her natural habitat sometime next year. On Friday, she died of a "renal condition."',
    publishedAt: new Date("2023-08-19T18:38:43Z"),
    imageUrl:
      "https://media.npr.org/assets/img/2023/08/19/lolita-for-greg-story_custom-61c36664cbd79665b077a9bf65f78f0e433c743a_wide-8b9c9e42f682c29db0e6c0b09cd4c8c5c0640c71-s1400-c100.jpg",
    source: "news-api",
    category: "sports",
  },
  {
    url: "https://lifehacker.com/today-s-wordle-hints-and-answer-for-friday-august-25-1850769644",
    author: "Beth Skwarecki",
    title: "Today’s Wordle Hints (and Answer) for Friday, August 25",
    description:
      "If you’re looking for the Wordle answer for August 25, read on. We’ll share some clues, tips, and strategies, and finally the solution. Today’s puzzle is of medium difficulty; WordleBot says the average player gets it in 3.9 guesses. Beware, there are spoiler…",
    publishedAt: new Date("2023-08-25T01:00:00Z"),
    imageUrl:
      "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/306532edb703767568479fcce03c501a.jpg",
    source: "news-api",
    category: "sports",
  },
  {
    url: "https://www.theverge.com/2023/8/21/23839976/california-tropical-storms-hurricane-hilary-climate-change",
    author: "Justine Calma",
    title:
      "Should California expect more tropical storms like Hurricane Hilary?",
    description:
      "A rare tropical storm pummeled California with heavy rain. Even though Hurricane Hilary was unusual, experts say it’s a good idea to be prepared for more flooding in the notoriously dry state.",
    publishedAt: new Date("2023-08-21T18:29:47Z"),
    imageUrl:
      "https://cdn.vox-cdn.com/thumbor/oRZPbl636GjGDhL_B5ufQm7gjVo=/0x0:5000x3335/1200x628/filters:focal(2500x1668:2501x1669)/cdn.vox-cdn.com/uploads/chorus_asset/file/24864004/1612698961.jpg",
    source: "news-api",
    category: "sports",
  },
  {
    url: "https://www.businessinsider.com/inside-the-efforts-to-make-fishing-more-sustainable-2023-8",
    author: "Tasmin Lockwood",
    title:
      "Fishing startups are making the industry more sustainable by repelling bycatch, recycling nets, and tackling dredging — but they need more cash to stay afloat",
    description:
      "Startups working at the intersection of climate and traditional fishing have cited a gap in funding they need to scale up.",
    publishedAt: new Date("2023-09-08T15:47:19Z"),
    imageUrl:
      "https://i.insider.com/64e61f3e912f290019a991e3?width=1200&format=jpeg",
    source: "news-api",
    category: "sports",
  },
  {
    url: "https://www.myrtlebeachonline.com/news/local/article278294578.html",
    author: "Terri  Richardson",
    title:
      "Fire burns at a Myrtle Beach, SC resort. ‘One of the biggest ones we have had in a while’",
    description:
      "The hotel is located on Ocean Boulevard. Several fire departments responded to the fire. Three firefighters were treated.",
    publishedAt: new Date("2023-08-16T11:46:43Z"),
    imageUrl:
      "https://media.zenfs.com/en/myrtle_beach_sun_news_mcclatchy_articles_833/eca064cc4b09683e5d894d43a4defbef",
    source: "news-api",
    category: "sports",
  },
  {
    url: "https://www.usgs.gov/faqs/why-ocean-salty",
    author: "null",
    title: "Why Is the Ocean Salty?",
    description:
      "Oceans cover about 70 percent of the Earth's surface and about 97 percent of all water on and in the Earth is saline—there's a lot of salty water on our planet. By some estimates, if the salt in the ocean could be removed and spread evenly over the Earth’s la…",
    publishedAt: new Date("2023-09-10T19:56:32Z"),
    imageUrl: "null",
    source: "news-api",
    category: "sports",
  },
];

export const flow: RouteFlowType<
  SearchNewsParamsType,
  SearchNewsResults
  // eslint-disable-next-line @typescript-eslint/require-await
> = async ({ keyword, page }) => {
  console.log(keyword);
  console.log(page);
  // const response = await searchContent({ keyword, page });

  let records: INewsResultType[];
  switch (+page) {
    case 1:
      records = first;
      break;
    case 2:
      records = second;
      break;
    case 3:
      records = third;
      break;
    case 4:
      records = fourth;
      break;
    default:
      records = [];
  }

  const response: IGetManyResponse<INewsResultType> = {
    currentPage: page ?? 1,
    totalPages: 576,
    totalRecords: 11535,
    records,
  };

  return successResponse(response);
};

# Data Notes

## Computing voter turnout by county

The tool will be based on estimated 2016 voter turnout percentages for every county in the US. 

* **Numerator**: Total presidential votes by county. These data are scraped from www.townhall.com/election/2016/president
* **Denominator**: Total Voting Age Population (VAP) from 2012-2016 ACS Census https://www.census.gov/programs-surveys/decennial-census/about/voting-rights/cvap.2016.html


## Notes on methods

This is not the preferred way to tabulate voter turnout rates. From http://www.electproject.org/2016g :


>A number of different turnout rates are presented here. The preferred turnout rates are those calculated with the voting-eligible population as the denominator. The voting-eligible population (VEP) represents an estimate of persons eligible to vote regardless of voter registration status in an election and is constructed by modifying the voting-age population (VAP), by components reported in the right-most columns (scroll right in the spreadsheet). Links to data sources are provided at the bottom of this page.

>The preferred turnout rate numerator is the Total Ballots Counted, which is all ballots election officials counted. Not all jurisdictions report total ballots counted, so a second-best numerator is Highest Office, which in a presidential election year is the total votes for all presidential candidates including write-ins, and in a non-presidential election may be the vote for the highest turnout statewide office (typically governor) or if no statewide election was held, the sum of the congressional elections. Total ballots counted includes blank and otherwise invalid votes for the highest office. Some states may report a statistic they call total ballots cast, but is actually vote for highest office.

But, working with what we got here. For the numerator, haven't been able to find county-level Total Votes Counted, only Presidential votes.  While precinct level data is available for each state at https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/NH5S2I the data is not formatted uniformly and would take considerable effort to aggregate from precinct to county in all states. For the denominator, I have been unable to find the county-level measures necessary to adjust VAP to VEP.  

Thus the limitations of these results are:

* The voter turnout rate does include people who *voted* but left the presidential choice blank
* The rate is calculated against Total Voting Age Population, not Voting-eligible population (VEP). VAP does not include people who are of age, but ineligible to vote, and thus less valid. For more on differences between VAP and VEP, see http://www.electproject.org/home/voter-turnout/faq/vap-v-vap
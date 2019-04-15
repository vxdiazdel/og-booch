import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Wrapper from "../elements/wrapper"

const GettingStarted = ({ data }) => (
  <Layout>
    <SEO title="Getting Started" keywords={[`kombucha`, `how to make kombucha`, `home made kombucha`]} />
    <Wrapper className="mt-5">
      <h1>What You Need</h1>
      <ul>
        <li>Glass brewing jar (1 gallon or larger)</li>
        <li>SCOBY & starter tea</li>
        <li>8 organic tea bags</li>
        <li>1 cup sugar</li>
        <li>Cheese cloth & rubber band</li>
        <li>PH Strips</li>
      </ul>
      <h2>Instructions</h2>
      <ul>
        <li>Boil 4 cups of water in a medium sized pot.</li>
        <li>Place tea bags in the hot water and steep for 5-6 minutes.</li>
        <li>Remove tea bags and discard. (The longer the tea remains in the water the stronger the flavor will be).</li>
        <li>Stir in 1 cup of sugar until dissolved.</li>
        <li>Pour tea mixture into the glass brewing jar.</li>
        <li>Fill the glass brewing jar with 8 cups of cold filtered unchlorinated water. Your jar should be 3/4 full leaving room for the SCOBY and started liquid.</li>
        <li>Let your mixture cool. It should be between 68-86&deg; F before moving on.</li>
        <li>Add your SCOBY and starter tea to your freshly brewed tea mixture. Don't worry if your SCOBY sinks or floats during the fermentation process, the end result will be the same.</li>
        <li>Stir your solution and test the acidity with a PH strip. The strip should read 4.5 or below. If it does not, you can add 1 Tbsp of white vinegar and retest until it reaches 4.5 or below.</li>
        <li>Cover and secure the jar with the cheese cloth and rubber band.</li>
        <li>Let your mixture sit at room temperature for 7-12 days out of direct sunlight but in an area with adequate air flow. (If you have room in a cabinet or closet that should be perfect).</li>
      </ul>
      <p>
        Kombucha brews best between 68-78&deg; F. Kombucha will not ferment properly in colder temperatures and will likely grow mold. In the next 7-12 days you should start to see a new cream-colored layer forming on the top of your jar, which is the new SCOBY forming. Remove the cloth cover and use a spoon to taste your liquid Kombucha mixture. If it is sweeter than your desired taste you can replace the cloth cover and let it ferment longer.
      </p>
      <p><strong>Congratulations! If everything went well your kombucha is now ready to drink. 🙃</strong></p>
      <p>You can enjoy your fresh kombucha plain or you can add additional flavors during the bottling process (also known as 2nd Fermentation).</p>
      <h2>What to Do Next</h2>
      <p>Remove the SCOBY from your gallons jar along with 1-2 cups of your finished kombucha. Set this aside in another jar or container as this will be your new SCOBY and starter tea for future batches of Kombucha.</p>
      <p>When you are ready to brew again, simply follow the instructions from the start using one or both of the SCOBYs. SCOBYs can usually be reused up to 5 or 6 times.</p>
      <p>For every one gallon batch of Kombucha you brew, use 1 cup of refined white sugar and 6-8 caffeinated tea bags (or 3-4 Tbsp of caffeinated loose leaf tea). Any tea such as black, green or oolong should work and will yiled slightly different flavors. Herbal teas are NOT recommended for Kombucha and sugar substitutes are not effective for fermentation as they are too complex for the culture to break down.</p>
      <h2>Bottling and Flavoring (2nd Fermentation)</h2>
      <ul>
        <li>If desired, add 2-3 Tbsp of your choice of fruits, juices, extracts or herbs to each bottle. Depending on the size of your bottle you may want to add more or less.</li>
        <li>Pour the kombucha through a funnel into each bottle leaving 1-2 inches of space at the top.</li>
        <li>Ensure the bottles are properly sealed and store them in a warm, dry place for 2-5 days. The length of time for your second fermentation and flavoring really is solely dependent on personal taste so the only way to really know if you have reached your desired result is by tasting your brew every couple of days to see if it is to your liking. Opening and tasting your kombucha every day or so can also be helpful to release some of the pressure built up in the bottles - this is also known as "burping".</li>
        <li>Good to go? Chill your bottles in the fridge to slow down the carbonation process.</li>
      </ul>
      <h5>Enjoy your freshly brewed liquid gold! 🤘</h5>
    </Wrapper>
  </Layout>
)

export default GettingStarted

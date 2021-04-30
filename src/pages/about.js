import * as React from "react"
import { graphql } from "gatsby"
import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const About = ({ data, location }) => {

    const siteTitle = data.site.siteMetadata.title

    return (
        <Layout location={location} title={siteTitle}>
          <Seo title="About Machinations" />
            <div id="about">
                <p><span className="beeg">Welcome to Machinations,</span> a college project and blog by <span className="alsoBeeg">me, Olivia Robson</span>. I hope you'll stay awhile!</p>
                <p>A little about me for those who might be interested in stalking me or becoming my friend, I live in Ontario Canada, just outside Toronto. I spend a lot of time at my computer creating websites and doing some graphic design. If you'd be interested in connecting for some *business*, please check out my freelance company, <a href="https://www.honeycombdd.com">Honeycomb Design & Development</a>.</p>
                <p>For those interested in the development side of things, this site was made using Gatsby, which uses Reactjs. React is pretty cool in the way it optimizes JavaScript interfaces and utilizes more of the client-side browser ability, and makes repeating code less necessary. </p>
                <p>For those of you who don't give a poop and a half about the technical details, welcome to my blog where I'll be writing about anything and everything. Poetry? Probably. Goth Rock? Definetly. My sweet litle Pl&#228;nt Bebs? You know imma gush about my sweet leafy babies.</p>
                <p>In any case. Thanks for dropping by, you must be pretty cool. Feel free to reach out if you'd like to. Squids and Cool Dinos are welcome. &#129425;&#129429;</p>
                <div className="centerImg"><img  src="https://media.giphy.com/media/10V3fRJougOUJa/source.gif" /></div>
                <hr />
            </div>
          <Bio />   
        </Layout>
    )}

    export default About

    export const pageQuery = graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `

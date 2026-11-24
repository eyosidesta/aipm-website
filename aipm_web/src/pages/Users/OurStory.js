import React from "react";
import { Link } from "react-router-dom";
import { PageHero, SubNav } from "../../components/Shared/PageHero";
import Reveal from "../../components/Shared/Reveal";
import { origin, founder } from "../../assets/siteImages";
import hailuElias from "../../assets/Team/hailuElias.jpg";
import amsaluMekonnen from "../../assets/Team/amsaluMekonnen.jpg";
import tagesseAbo from "../../assets/Team/tagesseAbo.jpg";
import calebAyele from "../../assets/Team/calebAyele.jpg";
import destaLangena from "../../assets/Team/destaLangena.jpg";

const ACTS = [
  {
    no: "01",
    title: "The mountain",
    body: "The Ambaricho International Prayer & Missions Movement started on a 10,000-foot mountain called Ambaricho, six hours south of Addis Ababa near the town of Durame, Ethiopia. Mount Ambaricho was the seat of a dynasty of witchdoctors from the Abba Sarecho family — worshipped by the people of the area for over 500 years.",
  },
  {
    no: "02",
    title: "The missionaries",
    body: "Christian missionaries arrived in southern Ethiopia in the late 1920s from England, the USA, Canada, Australia and New Zealand. Their faithful endeavor brought the conversion of natives who were bold to share their faith in Christ. Their day-and-night prayer fueled the spread of the Gospel, transforming the lives of the people — today over 95% of the Kambatta tribe are evangelical Christians, and the 22nd of the Abba Sarecho dynasty submitted to Jesus Christ roughly 45 years ago.",
  },
  {
    no: "03",
    title: "The first gathering",
    body: "After Evangelical Christianity became the predominant faith among the Kambatta people, believers started climbing Mount Ambaricho to pray for the lost throughout Ethiopia. After one such hike, a few teenagers pooled their money for water and snacks. When they told Dr. Desta, he suggested they give some of it to missions instead — and that gift birthed the vision of sending missionaries, so that a Prayer Movement birthed the Mission Movement.",
  },
  {
    no: "04",
    title: "The movement continues",
    body: "Every January, people gather on top of Mt. Ambaricho to fast and pray for world missions. Attendance has grown from 500 to over 100,000 people. After prayer and worship, the people give and pledge to support world missions through AIPM. Over the past 22 years, AIPM has trained and sent more than 920 missionaries across Ethiopia — many serving in highly challenging environments, mainly among fanatic and fundamentalist religious groups opposed to the Christian faith, along with armed conflict, national inflation and famine.",
  },
  {
    no: "05",
    title: "The movement advances",
    body: "God has given AIPM a vision for a global missionary training university in Durame — the AIPM Global Missions University — to house and train missionaries from Ethiopia, Africa and beyond. The land has been acquired and the curriculum developed. Alongside it, a 7-story building project in Durame will generate ministry revenue through retail, food and medical services while training leaders and housing missionaries.",
  },
];

const BELIEFS = [
  {
    title: "The Scriptures",
    body: "We believe the sixty-six books of the Old and New Testaments to be the full record of God’s self-disclosure to mankind. Different men, while writing according to their own styles and personalities, were supernaturally moved along by the Holy Spirit to record God’s very words, inerrant in the original writings. Therefore, those applying themselves to study its literal, historical-grammatical context can accurately understand God’s Word. Scripture is fully trustworthy as our final and sufficient authority for all of life (2 Timothy 3:16-17; 2 Peter 1:20-21).",
  },
  {
    title: "The Triune God",
    body: "We believe in the one living and true God, eternally existing in perfect unity as three equally and fully divine Persons: the Father, the Son, and the Holy Spirit (Matthew 28:19-20). Each member of the Godhead, while executing distinct but complementary roles in redemptive history, has precisely the same nature, attributes, and being, and is equally worthy of the same glory and honor and obedience (John 1:1-4).",
  },
  {
    title: "God the Father",
    body: "We believe God the Father created all things in six days for His glory according to His own will (Revelation 4:11), through His Son, Jesus Christ. He upholds all things by the Word of His power and grace, exercising sovereign headship over all creation, providence, and redemption (Colossians 1:17; Hebrews 1:3).",
  },
  {
    title: "God the Son",
    body: "We believe that Jesus Christ, the eternal, moved by love in accordance with the will of the Father, took on human flesh (John 1:1,14,18), conceived through the miraculous work of the Holy Spirit, He was born of the virgin Mary. He, being fully God and fully man (John 14:8-9), lived a sinless life and sacrificially shed His blood and died on the cross in our place accomplishing redemption for all who place their faith in Him. He arose visibly and bodily from the dead three days later and ascended into heaven, where, at the Father’s right hand, He is now Head of His Body the Church, the only Savior, the only Mediator between God and man, and will return to earth in power and glory to consummate His bride, the church as His redemptive mission (1 Timothy 3:16).",
  },
  {
    title: "God the Holy Spirit",
    body: "We believe that the Holy Spirit, in all that He does, glorifies the Lord Jesus Christ during this age. He convicts the world of sin, righteousness, and judgment. He draws the unredeemed to repentance and faith, and at salvation imparts new spiritual life to the believer, bringing that person into union with Christ and the Body of Christ. The Holy Spirit sanctifies, seals, fills, guides, instructs, comforts, equips, empowers, permanently indwells at salvation, and bestows spiritual gifts to the believer for Christ-like living and service (John 16:8; 13:15; Titus 3:5; Ephesians 1:22; 4:11-12; Romans 8:9-17; 12:4-8; 1 Corinthians 3:16; 12:4-5, 11-13, 19; Galatians 5:25; Hebrews 2:1-4; 2 Corinthians 12:12).",
  },
  {
    title: "Mankind",
    body: "We believe that God created mankind—male and female—in His own image and likeness, free of sin, to glorify Himself and enjoy His fellowship. Tempted by Satan and freely chose to disobey God, bringing sin, death and condemnation to all mankind. All human beings, therefore, are totally depraved by nature and by choice. Alienated from God without defense or excuse, and subject to God’s righteous wrath, all of mankind is in desperate need of the Savior (Genesis 3:1-6; Romans 3:10-19; Romans 1:18, 32).",
  },
  {
    title: "Salvation",
    body: "We believe that the Lord Jesus Christ died for our sins according to the Scriptures, as the substitutionary atonement in our place, and that salvation is found in none other than Jesus Christ. Before Creation, God chose those who would be saved and granted this unearned grace solely based on His sovereign good pleasure. Jesus Christ’s death on the cross was the sole and complete payment for sins, fully satisfying God’s righteous wrath, for each person that turns from sin in repentance and places their faith in Christ alone by grace alone. At salvation each person is made a new creation by the Holy Spirit, declared righteous before God, and secured as an adopted child of God forever. Genuine faith continues in obedience and love for Jesus Christ with a life eager to glorify God and persevere to the end (Romans 8:37-39; 2 Corinthians 5:21; 1 Corinthians 12:13).",
  },
  {
    title: "The Church",
    body: "We believe that upon placing one’s faith in the Lord Jesus Christ as Savior, the believer is made part of the Body of Christ, the one universal Church, of which Jesus Christ is the Head. The Scriptures command believers to gather locally in order to devote themselves to worship, prayer, teaching of the Word, fellowship, the ordinances of baptism and communion, service to the local body through the development and use of talents and spiritual gifts, and outreach to the world to make disciples (Ephesians 1:22-23; Acts 2:42-46; 1 Corinthians 14:26; Matthew 28:18-20). Wherever God’s people meet regularly in obedience to this command, there is the local expression of the Church under the watchful care of a plurality of elders. A church’s members are to work together in love and unity, intent on the ultimate purpose of glorifying Christ.",
  },
  {
    title: "Things to Come",
    body: "We believe in and expectantly await the glorious, visible, personal, return of the Lord Jesus Christ. The blessed hope of His return has vital bearing on the personal life, service, and mission of the believer (1 Thessalonians 4:13-18). We believe in the bodily resurrection of both the saved and the lost. The lost will be raised to judgment and experience eternal wrath in hell. The saved will be raised to eternal joy in the new heaven and new earth in the manifested presence of God (Acts 1:3, 9; Hebrews 7:25-26).",
  },
];

const VALUES = [
  {
    n: "01",
    title: "Prayer",
    body: "We pray that:",
    points: [
      "God will raise up laborers for a great harvest in Ethiopia, Africa and around the world.",
      "God would bring revival to the global Church, to be watchful for Christ’s second coming.",
    ],
  },
  { n: "02", title: "Training", body: "We train and equip missionaries to go and make disciples of all nations, tribes and tongues." },
  { n: "03", title: "Gospel Advancement", body: "We send equipped disciples to plant churches that will reach the world." },
];

// Ato Tesema Melese's photo is still to come — initials show until an `img` is added.
const TEAM = [
  { initials: "DL", img: destaLangena, name: "Dr. Desta Langena", role: "Founder and Director" },
  { initials: "HE", img: hailuElias, name: "Dr. Hailu Elias", role: "Chairman" },
  { initials: "AM", img: amsaluMekonnen, name: "Ato Amsalu Mekonnen", role: "Board Member" },
  { initials: "TM", name: "Ato Tesema Melese", role: "Board Member" },
  { initials: "TA", img: tagesseAbo, name: "Dr. Tagesse Abo", role: "Board Member" },
  { initials: "CA", img: calebAyele, name: "Pastor Kaleb Ayele", role: "Coordinator" },
];

function OurStory() {
  return (
    <>
      <PageHero
        img={origin}
        eyebrow="Who We Are"
        crumb="Our Story"
        title="From idols to intercession"
        description="The story of a mountain, a dynasty of witchdoctors, and the prayer movement that now gathers 100,000 strong."
      />
      <SubNav
        links={[
          { href: "#history", label: "History" },
          { href: "#founder", label: "Founder" },
          { href: "#beliefs", label: "Beliefs" },
          { href: "#values", label: "Values" },
          { href: "#team", label: "Team" },
        ]}
      />

      <section id="history">
        <div className="wrap narrow">
          <Reveal className="eyebrow">The Movement Begins</Reveal>
          <Reveal as="h2" style={{ marginTop: 10 }}>
            A mountain of witchcraft worship for over 500 years &mdash; now a mountain of prayer and a missionary-sending movement
          </Reveal>
          <Reveal style={{ marginTop: 8 }}>
            {ACTS.map((act) => (
              <div className="act" key={act.no}>
                <div className="no">{act.no}</div>
                <div>
                  <h3>{act.title}</h3>
                  <p>{act.body}</p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="founder alt" id="founder">
        <div className="wrap">
          <Reveal as="img" src={founder} alt="Dr. Desta Langena Letta, founder of AIPM, with his wife Zenebech Oushe." />
          <Reveal>
            <div className="eyebrow">The Founder</div>
            <blockquote style={{ marginTop: 14 }}>&ldquo;If we pray, God works! If we don&apos;t pray, we work.&rdquo;</blockquote>
            <div className="who">
              <div>
                <div className="name">Dr. Desta Langena Letta and his wife Zenebech Oushe</div>
                <div className="role">Founder &amp; Director, AIPM</div>
              </div>
            </div>
            <p className="bio">
              A graduate in Physics from Addis Ababa University, Dr. Desta earned his M.A. in Missions in Singapore
              and a Doctorate in Missiology at Western Seminary, Portland. He directed the Ethiopian Kale Heywet
              missionary training school for six years before founding AIPM. What began as a suggestion to a handful
              of teenagers has grown into a movement that gathers 100,000 people a year and has sent hundreds of
              missionaries across Ethiopia and beyond.
            </p>
          </Reveal>
        </div>
      </section>

      <section id="beliefs">
        <div className="wrap narrow">
          <Reveal className="section-head">
            <div>
              <div className="eyebrow">What We Believe</div>
              <h2>Our Statement of Faith</h2>
            </div>
            <p>AIPM holds to the historic, evangelical Christian faith across every area of doctrine and practice.</p>
          </Reveal>
          <Reveal className="faithlist">
            {BELIEFS.map((belief, i) => (
              <details key={belief.title} open={i === 0}>
                <summary>{belief.title}</summary>
                <p>{belief.body}</p>
              </details>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="alt" id="values">
        <div className="wrap">
          <Reveal className="section-head">
            <div>
              <div className="eyebrow">Our Values</div>
              <h2>What drives everything we do</h2>
            </div>
          </Reveal>
          <Reveal className="grid3" stagger>
            {VALUES.map((v) => (
              <div className="valuecard" key={v.n} style={{ "--i": Number(v.n) - 1 }}>
                <div className="n">{v.n}</div>
                <h3>{v.title}</h3>
                <p>{v.body}</p>
                {v.points && (
                  <ul className="valuepoints">
                    {v.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section id="team">
        <div className="wrap">
          <Reveal className="section-head">
            <div>
              <div className="eyebrow">Our Team</div>
              <h2>Board members and leadership</h2>
            </div>
            <p>The board and leadership who guide the work of AIPM from Durame, in Southern Ethiopia.</p>
          </Reveal>
          <Reveal className="team-grid" stagger>
            {TEAM.map((member, i) => (
              <div className="teamcard" key={member.name} style={{ "--i": i }}>
                <div className="avatar">
                  {member.img ? (
                    <img src={member.img} alt={member.name} />
                  ) : (
                    <span className="mono">{member.initials}</span>
                  )}
                </div>
                <div className="name">{member.name}</div>
                <div className="role">{member.role}</div>
              </div>
            ))}
          </Reveal>
          <p style={{ marginTop: 28, color: "var(--text-soft)", fontSize: 15 }}>
            Want to connect with the team or learn more about the movement?{" "}
            <Link to="/contact" style={{ color: "var(--accent-deep)", fontWeight: 700, textDecoration: "none" }}>
              Get in touch &rarr;
            </Link>
          </p>
        </div>
      </section>

      <section className="cta-band" id="give">
        <div className="wrap">
          <div className="inner">
            <Reveal>
              <h2>Be part of the next chapter</h2>
              <p>From a few teenagers pooling spare change to a movement of 100,000 &mdash; your support writes the next part of this story.</p>
            </Reveal>
            <Reveal className="actions">
              <Link to="/give" className="btn btn-gold">
                Give Now
              </Link>
              <Link to="/get-involved" className="btn btn-outline-ink">
                Get Involved
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

export default OurStory;

import styles from './Home.module.scss'

const powerBy = require('../../assets/power_by.png')
const linkBy = require('../../assets/link_by.png')
const historyBack = require('../../assets/historyBack.png')
const historyFirst = require('../../assets/first.png')
const historySecond = require('../../assets/second.png')
const historyThird = require('../../assets/third.png')
const historyFourth = require('../../assets/fourth.png')
const direFirst = require('../../assets/dire_first.png')
const direSecond = require('../../assets/dire_second.png')
const direThird = require('../../assets/dire_third.png')
const booking_btn = require('../../assets/booking_btn.png')
function Home () {
  return (
    <div className={styles.home}>
      <div className={styles.homePageTop}>
        <div className={styles.first}></div>
        <div className={styles.seond}></div>
        <div className={styles.third}></div>
        <div className={styles.fourt}></div>
        <div className={styles.firth}></div>
        <div className={styles.homePageTopBigTitle}>Simplify your sampling process.</div>
        <div className={styles.homePageTopSmallTitle}>Your go-to research and sampling platform. Reach your ideal participants in one click.</div>
        <div className={styles.homePageTopButtomList}>
          <div className={styles.homePageTopButtomItem} style={{ marginRight: '5.6%' }}>Live 2024</div>
          <div className={styles.homePageTopButtomItem} style={{ marginLeft: '5.6%' }}>Contact Sales</div>
        </div>
      </div>

      <div className={styles.homePageCenter}>
        <div className={styles.homePageCenterTopImg}>
          <img className={styles.leftImg} src={powerBy}></img>
          <img className={styles.rightImg} src={linkBy}></img>
        </div>
        <div className={styles.homePageCenterTitle}>
          <div className={styles.homePageCenterBigTitle}>Pooling Research & Sampling Platform</div>
          <div className={styles.homePageCenterSmallTitle}>Live 2024</div>
        </div>
        <div className={styles.homePageCenterItem}>
          <div style={{ position: 'relative' }}>
            <img className={styles.homePageCenterItemImg} src={historyBack}></img>
            <img className={styles.homePageCenterItemImgFirst} src={historyFirst}></img>
          </div>
          <div className={styles.homePageCenterItemTitle}>
            <div className={styles.homePageCenterItemBigTitle}>
              Describe your target
              group to distribute.
              We do the rest.
            </div>
            <div className={styles.homePageCenterItemSmallTitle}>
              We help you reduce sampling bias that
              damages your research accuracy.
            </div>
          </div>
        </div>
        <div className={styles.homePageCenterItem}>
          <div className={styles.homePageCenterItemTitle}>
            <div className={styles.homePageCenterItemBigTitle}>
              Your ideal
              participants are one
              click away.
            </div>
            <div className={styles.homePageCenterItemSmallTitle}>
              Our algorithm pushes your research to the
              correct persons.
              Get instant answers with real-time follow.
              No third-party involved.
            </div>
          </div>
          <img src={historySecond} className={styles.homePageCenterItemImg} style={{ marginLeft: '5.2%', marginRight: '0px' }}></img>
        </div>
        <div className={styles.homePageCenterItem}>
          <img src={historyThird} className={styles.homePageCenterItemImg}></img>
          <div className={styles.homePageCenterItemTitle}>
            <div className={styles.homePageCenterItemBigTitle}>
              Monitor your research
              progress closely with
              your team.
            </div>
            <div className={styles.homePageCenterItemSmallTitle}>
              Under teamwork mode. you and your
              teammates can check interview bookings and
              surveys collected anywhere anytime.
            </div>
          </div>
        </div>
        <div className={styles.homePageCenterItem}>
          <div className={styles.homePageCenterItemTitle}>
            <div className={styles.homePageCenterItemBigTitle}>
              You and your
              participants’ data are
              safe with us
            </div>
            <div className={styles.homePageCenterItemSmallTitle}>
              Our data security algorithm safeguards your
              and your participants privacy
            </div>
          </div>
          <img src={historyFourth} className={styles.homePageCenterItemImg} style={{ marginLeft: '5.2%', marginRight: '0px' }}></img>
        </div>
      </div>


      <div className={styles.homePageBottom}>
        <div className={styles.homePageBottomTitle}>
          <div className={styles.homePageBottomBigTitle}>Our offering</div>
          <div className={styles.homePageBottomSmallTitle}>Streamline your insight-gaining process.</div>
        </div>
        <div className={styles.homePageBottomItem}>
          <img className={styles.homePageBottomItemImg} src={direFirst}></img>
          <div className={styles.homePageBottomItemTitle}>
            <div className={styles.homePageBottomItemBigTitle}>AI Assistant</div>
            <div className={styles.homePageBottomItemSmallTitle}>Unleash your research potential: AI-powered
              precision at every step.</div>
          </div>
        </div>
        <di className={styles.homePageBottomItem}>

          <div className={styles.homePageBottomItemTitle}>
            <div className={styles.homePageBottomItemBigTitle}>AR Interview</div>
            <div className={styles.homePageBottomItemSmallTitle}>Real and private dialogues.</div>
          </div>
          <img className={styles.homePageBottomItemImg} src={direSecond} style={{ marginRight: '0px', marginLeft: '5.2%' }}></img>
        </di>
        <div className={styles.homePageBottomItem}>
          <img className={styles.homePageBottomItemImg} src={direThird}></img>
          <div className={styles.homePageBottomItemTitle}>
            <div className={styles.homePageBottomItemBigTitle}>Data Analytics</div>
            <div className={styles.homePageBottomItemSmallTitle}>From raw data to invaluable insights: data
              analytics elevates your research game.</div>
          </div>
        </div>
      </div>


      <div className={styles.homePageLast}>
        <div className={styles.homePageLastTitle}>Book a Beta product Now.</div>
        <img className={styles.homePageLastImg} src={booking_btn}></img>
      </div>
    </div>
  )
}
export default Home
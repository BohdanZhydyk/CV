import headerData from './headerData'
import mainData from './mainData'
import footerData from './footerData'

import bzPost from './statistic'


const state = {
  headerData,
  mainData,
  footerData
}

bzPost( {}, function(data){ })

export default state
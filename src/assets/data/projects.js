import { v4 as uuidv4 } from 'uuid';
import Noods from '../images/noods.png';
import TopFit from '../images/topfit.png';
import Autumn from '../images/autumn.png';
import Bullington from '../images/bullington.png';
import Parks from '../images/parks.png';
import Myrtle from '../images/myrtle.png';

const projects = [

  {
    id: uuidv4(),
    name: 'Myrtle Hill Consulting',
    desc:
      'WordPress site for Myrtle Hill Consulting in Atlanta, GA.',
    img: Myrtle,
    link: 'https://www.myrtlehillconsulting.com/',
  },
  {
    id: uuidv4(),
    name: 'TopFit',
    desc:
      'Mock-up version for TopFit Homepage Design. Incorporated custom-built meditation app, audio mp3 functionality, custom form, etc. Deployed with Netlify. ',
    img: TopFit,
    link: 'https://priceless-archimedes-bbec53.netlify.app/',
  },
  {
    id: uuidv4(),
    name: 'Autumn Landscape',
    desc:
      'WordPress site for Autumn Landscape Co. in Atlanta, GA.',
    img: Autumn,
    link:'https://autumnlandscape.com/'
  },
  {
    id: uuidv4(),
    name: 'Noods ATL',
    desc:
      'Shopify store for NoodsATL',
    img: Noods,
    link: 'https://noodsatl.com/',
  },
  {
    id: uuidv4(),
    name: "Bullington Clothing",
    desc:
      'Shopify store for Bullington CLothing at St. Simons Island, GA',
    img: Bullington,
    link: 'https://www.stevebullington.com/'
  },
 
  {
    id: uuidv4(),
    name: 'Parks&Parkas',
    desc:
      'An interactive app allowing users to search for a national park and is then provided with a correlating weekly weather forecast and park info. Uses Open Weather and National Park API, Bootstrap, jQuery frameworks and local storage.',
    img: Parks,
    link: 'https://ls-t.github.io/Parks-N-Parkas/'
  },


];

export default projects;
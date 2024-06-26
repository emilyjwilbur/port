import { v4 as uuidv4 } from 'uuid';
import Noods from '../images/noods.png';
import TopFit from '../images/TopFit.jpg';
import Autumn from '../images/autumn.png';
import Bullington from '../images/bullington.png';
import Parks from '../images/parks.png';
import Myrtle from '../images/myrtle.png';
import Employee from '../images/employee.png';
import Meditation from '../images/meditation.png';
import LGMRI from '../images/LGMRI.png';
import Sages from '../images/Sages.jpg';

const projects = [

  {
    id: uuidv4(),
    name: 'Myrtle Hill Consulting',
    desc:
      'WordPress site customization for Myrtle Hill Consulting in Atlanta, GA.',
    img: Myrtle,
    link: 'https://www.myrtlehillconsulting.com/',
  },
  {
    id: uuidv4(),
    name: 'TopFit',
    desc:
      'Mock-up version for TopFit Homepage Design built with HTML, CSS & JavaScript. Incorporated custom-built meditation app, audio mp3 functionality, custom form, etc. Deployed with Netlify. ',
    img: TopFit,
    link: 'https://priceless-archimedes-bbec53.netlify.app/',
  },
  {
    id: uuidv4(),
    name: 'Meditation App',
    desc:
      'A meditation app built using HTML, CSS & JavaScript.',
    img: Meditation,
    link: 'https://priceless-archimedes-bbec53.netlify.app/meditation.html'

  },
  {
    id: uuidv4(),
    name: 'Autumn Landscape',
    desc:
      'WordPress theme customization for Autumn Landscape Co. in Atlanta, GA.',
    img: Autumn,
    link:'https://autumnlandscape.com/'
  },
  {
    id: uuidv4(),
    name: 'Noods ATL',
    desc:
      'Shopify store customization for NoodsATL',
    img: Noods,
    link: 'https://noodsatl.com/',
  },
  {
    id: uuidv4(),
    name: "Bullington Clothing",
    desc:
      'Shopify store customization for Bullington Clothing at St. Simons Island, GA',
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
  {
    id: uuidv4(),
    name: 'Employee Directory',
    desc:
      'A React app that leverages the Random User database to generate a list of random employees. This was an activity to get more familiar with setting state, mapping arrays and doing on-page sorting.',
    img: Employee,
    link: 'https://radiant-mountain-52951.herokuapp.com/'

  },
  {
    id:uuidv4(),
    name: 'LG-MRI',
    desc:
    'A WordPress website revamp and development of a new information architecture. LG-MRI BoldVu displays are renowned for their top-notch image quality, making them highly sought-after assets.',
    img: LGMRI,
  },
  {
    id:uuidv4(),
    name: 'Sages Networks',
    desc:
    '',
    img: Sages,
    link:'https://www.sagesnetworks.com/'

  }


];

export default projects;
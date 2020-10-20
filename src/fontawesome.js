

import { library } from '@fortawesome/fontawesome-svg-core'

// import whole libraries
import { fab } from '@fortawesome/free-brands-svg-icons';
// import individual icons
import { faCoffee, faEnvelope as fasEnvelope, faDatabase,
faFile } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope as farEnvelope } from '@fortawesome/free-regular-svg-icons';

//add icons to library
library.add(
  fab,
  faCoffee,
  faFile,
  faDatabase,
  fasEnvelope,
  farEnvelope
);
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box, Container } from '@mui/material';

import Header from '../../common/components/header/Header';
import Flexbox from '../../common/components/styled/Flexbox';
import usePalette from '../../common/hooks/usePalette';

const AppLayout = () => {
   const palette = usePalette();

   return (
      <Box sx={{ backgroundColor: palette.background.main, minHeight: '100vh' }}>
         <Header/>
         <Flexbox component="main" sx={{ background: palette.background.main }}>
            <Flexbox sx={{ width: '100%', paddingTop: '2rem' }}>
               <Container>
                  <Flexbox>
                     <Box
                        component="section"
                        sx={{ flex: '1 1 100%' }}
                     >
                        <Box>
                           <Container sx={{ background: palette.background.main }}>
                              <Flexbox>
                                 <Outlet/>
                              </Flexbox>
                           </Container>
                        </Box>
                     </Box>
                  </Flexbox>
               </Container>
            </Flexbox>
         </Flexbox>
      </Box>
   );
};

export default AppLayout;
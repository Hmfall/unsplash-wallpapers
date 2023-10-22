import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

import Flexbox from '../styled/Flexbox';
import usePalette from '../../hooks/usePalette';

const Header = () => {
   const palette = usePalette();
   const navigate = useNavigate();

   return (
      <Box
         component="header"
         sx={{
            backgroundColor: palette.background.dark,
         }}
      >
         <Container maxWidth="md">
            <Flexbox
               sx={{
                  height: { xs: '100px', sm: '54px' },
                  alignItems: 'center',
               }}
            >
               <Box mr={8} onClick={() => navigate('/topics')}>
                  <Typography component="a">
                     Topics
                  </Typography>
               </Box>
               <Box onClick={() => navigate('/collections')}>
                  <Typography component="a">
                     Collections
                  </Typography>
               </Box>
            </Flexbox>
         </Container>
      </Box>
   );
};

export default Header;
import React, { FC, useState } from 'react';
import { Box, Typography } from '@mui/material';

import usePalette from '../../../common/hooks/usePalette';
import Flexbox from '../../../common/components/styled/Flexbox';
import { useAppDispatch, useAppSelector } from '../../../common/hooks/useTStore';
// import { selectFilter } from '../../features/filters/slice/filtersSlice';
// import { setSort } from '../../features/filters/slice/filtersSlice';
// import { TSort } from '../../@types';
// import { sortItems } from '../@types/common';

const Sort: FC = () => {
   const dispatch = useAppDispatch();
   // const { sort } = useAppSelector(selectFilter);
   const palette = usePalette();

   const [open, setOpen] = useState(false);

   // const handleSortType = (sortTypeValue: TSort) => {
   //    dispatch(
   //       setSort(sortTypeValue),
   //    );
   // };

   return (
      <Flexbox>
         <Flexbox sx={{ alignItems: 'center', marginRight: 1.5 }}>
            <Box>
               <Typography variant="body2">
                  Сортировка:
               </Typography>
            </Box>
         </Flexbox>
         <Box
            onClick={() => setOpen(!open)}
            sx={{
               cursor: 'pointer',
               position: 'relative',
            }}
         >
            {/*<Typography*/}
            {/*   variant="body1"*/}
            {/*   sx={{*/}
            {/*      '&:hover': {*/}
            {/*         textDecoration: 'underline',*/}
            {/*         color: palette.primary.light,*/}
            {/*      },*/}
            {/*   }}*/}
            {/*>*/}
            {/*   {sort.title}*/}
            {/*</Typography>*/}
            {open &&
               <Box
                  sx={{
                     position: 'absolute',
                     width: '130px',
                     background: palette.background.dark,
                     top: '25px',
                     left: '-45px',
                  }}
               >
                  <Box component="ul">
                     {/*{sortItems.map((item: TSort, i) =>*/}
                     {/*   <Box*/}
                     {/*      component="li"*/}
                     {/*      key={i}*/}
                     {/*      px={2}*/}
                     {/*      py={1.2}*/}
                     {/*      sx={{*/}
                     {/*         '&:hover': {*/}
                     {/*            background: palette.background.light,*/}
                     {/*         },*/}
                     {/*      }}*/}
                     {/*      onClick={() => handleSortType(item)}*/}
                     {/*   >*/}
                     {/*      <Typography variant="body1" component="a">*/}
                     {/*         {item.id}*/}
                     {/*      </Typography>*/}
                     {/*   </Box>,*/}
                     {/*)}*/}
                  </Box>
               </Box>
            }
         </Box>
      </Flexbox>
   );
};

export default Sort;
import { Stack, Typography } from "@mui/material";
import services from '../assets/services.png'
import { useNavigate } from "react-router-dom";

export default function Services() {
  const History = useNavigate()

  return (
    <Stack minHeight={'fit-content'} bgcolor={'#c0d6ff'} py={[70, 190, 190]}  px={['', '100px', '100px']}> 
      <Stack maxWidth={1200} width={['88%','100%']} fontFamily={'Inter !important'} alignSelf={'center'}>
        <Typography lineHeight={'normal'} fontFamily={'Inter'} color={'#02173E'} fontSize={24} fontWeight={500}>
          OUR SERVICES
        </Typography>

        <Typography lineHeight={'normal'} marginBottom={[100, 150, 200]} fontFamily={'Inter'} mb={8} color={'#02173E'} fontSize={[38, 42, 56]} fontWeight={600}>
          Explore Our Services
        </Typography>

        <Stack onClick={ () => History('/services1')} rowGap={37} justifyContent={'space-between'} alignItems={'center'} flexWrap={['wrap', 'wrap', 'wrap']} direction={['column', 'row' ,'row']}>
          <Stack width={['100%','48%','23.5%']}  sx={{ background: `url(${services})`, aspectRatio: '1/0.7', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', cursor:'pointer'}}>
            <Stack p={21} alignItems={'center'} justifyContent={'flex-end'} width={'100%'} height={'100%'} sx={{ background: 'linear-gradient(0deg, #000 0%, rgba(0, 0, 0, 0.00) 100%)'}}>
              <Typography textAlign={'center'} fontSize={16} color={'#fff'} fontWeight={500} lineHeight={'normal'}>
                Maritime Insurance
              </Typography>
            </Stack>
          </Stack>

          <Stack onClick={ () => History('/services2')} width={['100%','48%','23.5%']}  sx={{ background: `url(${services})`, aspectRatio: '1/0.7', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', cursor: 'pointer'}}>
            <Stack p={21} alignItems={'center'} justifyContent={'flex-end'} width={'100%'} height={'100%'} sx={{ background: 'linear-gradient(0deg, #000 0%, rgba(0, 0, 0, 0.00) 100%)'}}>
              <Typography textAlign={'center'} fontSize={16} color={'#fff'} fontWeight={500} lineHeight={'normal'}>
                Claims and Loss Recovery Insurance
              </Typography>
            </Stack>
          </Stack>

          <Stack onClick={ () => History('/services3')} width={['100%','48%','23.5%']}  sx={{ background: `url(${services})`, aspectRatio: '1/0.7', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', cursor: 'pointer'}}>
            <Stack p={21} alignItems={'center'} justifyContent={'flex-end'} width={'100%'} height={'100%'} sx={{ background: 'linear-gradient(0deg, #000 0%, rgba(0, 0, 0, 0.00) 100%)'}}>
              <Typography textAlign={'center'} fontSize={16} color={'#fff'} fontWeight={500} lineHeight={'normal'}>
                Sales of Tamper Proof Devices
              </Typography>
            </Stack>
          </Stack>

          <Stack onClick={ () => History('/services4')} width={['100%','48%','23.5%']} sx={{ background: `url(${services})`, aspectRatio: '1/0.7', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', cursor: 'pointer'}}>
            <Stack p={21} alignItems={'center'} justifyContent={'flex-end'} width={'100%'} height={'100%'} sx={{ background: 'linear-gradient(0deg, #000 0%, rgba(0, 0, 0, 0.00) 100%)'}}>
              <Typography textAlign={'center'} fontSize={16} color={'#fff'} fontWeight={500} lineHeight={'normal'}>
                Salvage Brokerage & Disposal
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}


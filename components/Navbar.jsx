import { Link, useNavigate } from "react-router-dom";
import {
  Box, Flex, Button, useDisclosure, Stack, IconButton,
  Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate(); 

  const handleLogout = () => {
    localStorage.removeItem("token"); 
    navigate("/login");
  };

  return (
    <Box as="header" bg="teal.500" p={4}>
      <Flex justify="space-between" align="center">
        <Box color="white" fontWeight="bold" fontSize="xl">
          Donggala APP
        </Box>

        <Flex display={{ base: "none", md: "flex" }} gap={4} align="center">
          <Link color="white" to="/">Beranda</Link>
          <Link color="white" to="/inputaspirasi">Form Aspirasi</Link>
          <Link color="white" to="/semuaaspirasi">Semua Aspirasi</Link>
          <Link color="white" to="/aspirasisaya">Aspirasi Saya</Link>
          <Link color="white" to="/profil">Profil</Link>
          <Button colorScheme="red" size="sm" onClick={handleLogout}>
            Logout
          </Button>
        </Flex>

        {/* Hamburger untuk mobile */}
        <IconButton
          aria-label="Open Menu"
          icon={<HamburgerIcon />}
          display={{ base: "block", md: "none" }}
          onClick={onOpen}
          color="white"
        />
      </Flex>

      <Drawer isOpen={isOpen} placement="top" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Pilih Menu</DrawerHeader>
          <DrawerBody>
            <Stack spacing={4}>
              <Link color="teal.500" to="/">Beranda</Link>
              <Link color="teal.500" to="/inputaspirasi">Form Aspirasi</Link>
              <Link color="teal.500" to="/semuaaspirasi">Semua Aspirasi</Link>
              <Link color="teal.500" to="/aspirasisaya">Aspirasi Saya</Link>
              <Link color="teal.500" to="/profil">Profil</Link>
              <Button colorScheme="red" size="sm" onClick={handleLogout}>
                Logout
              </Button>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Navbar;

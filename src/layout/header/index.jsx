import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import PersonIcon from "@mui/icons-material/Person";
import ToggleButton from "@mui/material/ToggleButton";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import { styled, alpha } from "@mui/material/styles";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
  ".MuiBadge-dot": {
    backgroundColor: theme.palette.primary.main,
  },
}));

const StyledToggleButton = styled(ToggleButton)(({ theme }) => ({
  color: "white",
  borderColor: "white",
  "&.Mui-selected": {
    backgroundColor: theme.palette.primary.main,
  },
  "&:hover": {
    backgroundColor: alpha(theme.palette.primary.main, 0.2),
  },
}));

const Header = ({ navItems, activeIndex, onNavigationClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="w-[90%] h-24 flex items-center m-auto">
      <nav className="flex items-center w-full justify-between">
        <div>
          <img src={logo} alt="Logo" className="w-24" />
        </div>
        <div className="flex items-center space-x-4">
          <div className={`lg:flex ${menuOpen ? 'block' : 'hidden'}`}>
            <ul className={`flex gap-6 xl:gap-2 lg:gap-4 ${menuOpen ? 'block' : 'hidden'} lg:flex`}>
              {navItems?.map((item) => (
                <button
                  key={item.id}
                  style={{
                    borderColor: activeIndex === item.id ? item.color || "blue" : "transparent",
                    color: activeIndex === item.id ? item.color || "blue" : "white",
                  }}
                  className="w-24 h-8 rounded-xl border-2 flex items-center justify-center"
                  onClick={() => onNavigationClick(item.id)}
                >
                  {item.label}
                </button>
              ))}
            </ul>
          </div>
 
          <div className={`flex items-center `}>
            <Search className="text-white">
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            <StyledBadge color="primary">
              <PersonIcon fontSize="large" />
            </StyledBadge>
          </div>
          <div className="lg:hidden">
            <StyledToggleButton
              value="menu"
              aria-label="menu toggle"
              border="none"
              onClick={toggleMenu}
            >
              <FormatAlignLeftIcon />
            </StyledToggleButton>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

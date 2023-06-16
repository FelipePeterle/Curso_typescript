///type MarcaTenis = "abc" | "def" | "fgh";

enum MarcaTenis2 {
  NIKE = 4,
  DEF = "def",
  FGH = "fgh",
}

interface Tenis {
  marcaTenis: MarcaTenis2;
}

const test: Tenis = {
  marcaTenis: MarcaTenis2.NIKE,
};

if (test.marcaTenis === MarcaTenis2.NIKE) {
  console.log("É nike");
}

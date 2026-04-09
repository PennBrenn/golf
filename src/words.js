export const WORDS = [
  'FROG', 'LAMP', 'BIRD', 'CAKE', 'DESK', 'FISH', 'GOLF', 'HAZE',
  'IRIS', 'JUMP', 'KITE', 'LION', 'MOON', 'NEST', 'OVAL', 'PINE',
  'QUIZ', 'RAIN', 'STAR', 'TREE', 'UNIT', 'VINE', 'WOLF', 'YARD',
  'ZINC', 'ARCH', 'BARK', 'CLAM', 'DUSK', 'ECHO', 'FERN', 'GLOW',
  'HAWK', 'IRON', 'JADE', 'KELP', 'LARK', 'MIST', 'NEON', 'OPAL',
  'PALM', 'REEF', 'SILK', 'TUSK', 'URGE', 'VALE', 'WASP', 'APEX',
  'BOLT', 'COVE', 'DAWN', 'EDGE', 'FLUX', 'GRIT', 'HUSK', 'ISLE',
  'JAZZ', 'KNOT', 'LUSH', 'MAZE', 'NOVA', 'ONYX', 'PEAK', 'RAFT',
  'SAGE', 'TIDE', 'USED', 'VEIL', 'WREN', 'AXLE', 'BEAM', 'CORD',
  'DOME', 'EMIT', 'FOAM', 'GLEN', 'HARP', 'ITCH', 'JOLT', 'KERN',
  'LILY', 'MOTH', 'NOOK', 'ORBS', 'PLUM', 'RAMP', 'SLAB', 'TURF',
  'UNDO', 'VAST', 'WILT', 'YARN', 'ZEAL', 'ACRE', 'BLOT', 'CUBE',
  'DART', 'EMIT', 'FLAG', 'GUST', 'HELM', 'ICON', 'JURY', 'KING',
  'LOOM', 'MINT', 'NOTE', 'OATH', 'PIER', 'RIND', 'SWAN', 'TRAP',
  'UPON', 'VENT', 'WISH', 'YAWN', 'ZONE', 'ARID', 'BRIM', 'CLAP',
  'DUNE', 'EPIC', 'FOLD', 'GRIP', 'HOOF', 'IBIS', 'JERK', 'KNOB',
  'LACE', 'MULE', 'NAIL', 'ORCA', 'PELT', 'ROBE', 'SNAG', 'TWIG',
  'UDON', 'VOID', 'WICK', 'YOGI', 'ZEST', 'ALLY', 'BULB', 'COAL',
  'DIME', 'FAWN', 'GALE', 'HOOK', 'IOTA', 'JAWS', 'KIWI', 'LYNX',
  'MARS', 'NEWT', 'OXEN', 'PAWN', 'RUBY', 'SLUG', 'TACO', 'VASE',
  'WADE', 'YELL', 'AGED', 'BYTE', 'CROW', 'DEFT', 'EPIC', 'FUNK',
  'GAZE', 'HALO', 'IGLU', 'JIBE', 'KALE', 'LUMP', 'MALT', 'NUMB',
  'OPUS', 'PUMA', 'RUNE', 'SOOT', 'THAW', 'UMPS', 'VIAL', 'WISP',
  'YOKE', 'BUZZ', 'AQUA', 'BALE', 'CHOP', 'DILL', 'ELMS', 'FLAX',
  'GRIM', 'HULL', 'INKS', 'JAMB', 'KEEL', 'LAVA', 'MUTT', 'NODE',
];

export function generateRoomCode() {
  return WORDS[Math.floor(Math.random() * WORDS.length)];
}

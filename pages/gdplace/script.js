const images = ['j (1).png', 'j (2).png', 'j (3).png', 'j (4).png', 'j (5).png', 'j (6).png', 'j (7).png', 'j (8).png', 'j (9).png', 'j (10).png', 'j (11).png', 'j (12).png', 'j (13).png', 'j (14).png', 'j (15).png', 'j (16).png', 'j (17).png', 'j (18).png', 'j (19).png', 'j (20).png', 'j (21).png', 'j (22).png', 'j (23).png', 'j (24).png', 'j (25).png', 'j (26).png', 'j (27).png', 'j (28).png', 'j (29).png', 'j (30).png', 'j (31).png', 'j (32).png', 'j (33).png', 'j (34).png', 'j (35).png', 'j (36).png', 'j (37).png', 'j (38).png', 'j (39).png', 'j (40).png', 'j (41).png', 'j (42).png', 'j (43).png', 'j (44).png', 'j (45).png', 'j (46).png', 'j (47).png', 'j (48).png', 'j (49).png', 'j (50).png', 'j (51).png', 'j (52).png', 'j (53).png', 'j (54).png', 'j (55).png', 'j (56).png', 'j (57).png', 'j (58).png', 'j (59).png', 'j (60).png', 'j (61).png', 'j (62).png', 'j (63).png', 'j (64).png', 'j (65).png', 'j (66).png', 'j (67).png', 'j (68).png', 'j (69).png', 'j (70).png', 'j (71).png', 'j (72).png', 'j (73).png', 'j (74).png', 'j (75).png', 'j (76).png', 'j (77).png', 'j (78).png', 'j (79).png', 'j (80).png', 'j (81).png', 'j (82).png', 'j (83).png', 'j (84).png', 'j (85).png', 'j (86).png', 'j (87).png', 'j (88).png', 'j (89).png', 'j (90).png', 'j (91).png', 'j (92).png', 'j (93).png', 'j (94).png', 'j (95).png', 'j (96).png', 'j (97).png', 'j (98).png', 'j (99).png', 'j (100).png', 'j (101).png', 'j (102).png', 'j (103).png', 'j (104).png', 'j (105).png', 'j (106).png', 'j (107).png', 'j (108).png', 'j (109).png', 'j (110).png', 'j (111).png', 'j (112).png', 'j (113).png', 'j (114).png', 'j (115).png', 'j (116).png', 'j (117).png', 'j (118).png', 'j (119).png', 'j (120).png', 'j (121).png', 'j (122).png', 'j (123).png', 'j (124).png', 'j (125).png', 'j (126).png', 'j (127).png', 'j (128).png', 'j (129).png', 'j (130).png', 'j (131).png', 'j (132).png', 'j (133).png', 'j (134).png', 'j (135).png', 'j (136).png', 'j (137).png', 'j (138).png', 'j (139).png', 'j (140).png', 'j (141).png', 'j (142).png', 'j (143).png', 'j (144).png', 'j (145).png', 'j (146).png', 'j (147).png', 'j (148).png', 'j (149).png', 'j (150).png', 'j (151).png', 'j (152).png', 'j (153).png', 'j (154).png', 'j (155).png', 'j (156).png', 'j (157).png', 'j (158).png', 'j (159).png', 'j (160).png', 'j (161).png', 'j (162).png', 'j (163).png', 'j (164).png', 'j (165).png', 'j (166).png', 'j (167).png', 'j (168).png', 'j (169).png', 'j (170).png', 'j (171).png', 'j (172).png', 'j (173).png', 'j (174).png', 'j (175).png', 'j (176).png', 'j (177).png', 'j (178).png', 'j (179).png', 'j (180).png', 'j (181).png', 'j (182).png', 'j (183).png', 'j (184).png', 'j (185).png', 'j (186).png', 'j (187).png', 'j (188).png', 'j (189).png', 'j (190).png', 'j (191).png', 'j (192).png', 'j (193).png', 'j (194).png', 'j (195).png', 'j (196).png', 'j (197).png', 'j (198).png', 'j (199).png', 'j (200).png', 'j (201).png', 'j (202).png', 'j (203).png', 'j (204).png', 'j (205).png', 'j (206).png', 'j (207).png', 'j (208).png', 'j (209).png', 'j (210).png', 'j (211).png', 'j (212).png', 'j (213).png', 'j (214).png', 'j (215).png', 'j (216).png', 'j (217).png', 'j (218).png', 'j (219).png', 'j (220).png', 'j (221).png', 'j (222).png', 'j (223).png', 'j (224).png', 'j (225).png', 'j (226).png', 'j (227).png', 'j (228).png', 'j (229).png', 'j (230).png', 'j (231).png', 'j (232).png', 'j (233).png', 'j (234).png', 'j (235).png', 'j (236).png', 'j (237).png', 'j (238).png', 'j (239).png', 'j (240).png', 'j (241).png', 'j (242).png', 'j (243).png', 'j (244).png', 'j (245).png', 'j (246).png', 'j (247).png', 'j (248).png', 'j (249).png']
let currentIndex = 0;

const prevButton = document.getElementById('prev-btn');
const nextButton = document.getElementById('next-btn');
const currentImage = document.getElementById('current-image');
const imageNumber = document.getElementById('image-number');

prevButton.addEventListener('click', showPrevImage);
nextButton.addEventListener('click', showNextImage);
document.addEventListener('keydown', handleKeyPress);

function showPrevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImage();
}

function showNextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  updateImage();
}

function handleKeyPress(event) {
  if (event.key === 'ArrowLeft') {
    showPrevImage();
  } else if (event.key === 'ArrowRight') {
    showNextImage();
  }
}

function updateImage() {
  const imagePath = images[currentIndex];
  currentImage.src = imagePath;
  currentImage.alt = `Image ${currentIndex + 1}`;
  imageNumber.textContent = `Image ${currentIndex + 1}`;
}

// Initialize with the first image
updateImage();

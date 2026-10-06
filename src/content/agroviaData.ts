export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  category: "Agronomy" | "Diagnostic" | "Strategic";
  deliverables: string[];
  metrics: string;
  image: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "crop-scouting",
    number: "01",
    title: "Crop Scouting & Field Audits",
    tagline: "Frequent in-field inspection identifying risks before yield is compromised.",
    description: "Systematic, boots-on-the-ground canopy and root-zone inspections across critical vegetative and reproductive stages. We document pest thresholds, disease vectors, and crop architecture using geo-referenced scouting logs.",
    category: "Agronomy",
    deliverables: ["Geo-referenced scouting logs", "Pest & beneficial insect ratios", "Action threshold triggers"],
    metrics: "48-hr Turnaround on Field Logs",
    image: "https://images.unsplash.com/photo-1592417817098-8f3d69109853?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "pest-disease",
    number: "02",
    title: "Pest & Disease Management",
    tagline: "Integrated pest management (IPM) tailored to tropical and subtropical pressures.",
    description: "Precision scouting and targeted intervention strategies designed to preserve beneficial populations while aggressively controlling destructive pressure (Heliothis, Whitefly, Powdery Mildew, Anthracnose, and Fusarium).",
    category: "Agronomy",
    deliverables: ["IPM spray strategies", "Resistance management programs", "Preventative bio-rational options"],
    metrics: "Targeted Mode-of-Action Rotation",
    image: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "crop-nutrition",
    number: "03",
    title: "Crop Nutrition Programs",
    tagline: "Complete macro and micro-nutrient budgeting from emergence to pack-out.",
    description: "Balanced nutrient curves synchronized with crop phenology. We balance Nitrogen, Phosphorus, Potassium, Calcium, Magnesium, and trace elements to optimize quality, firm skinning, and transport endurance.",
    category: "Strategic",
    deliverables: ["Custom pre-plant & side-dress budgets", "Foliar nutrition schedules", "Phenological uptake curves"],
    metrics: "Balanced Cation Saturation Ratio",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "soil-plant-health",
    number: "04",
    title: "Soil & Plant Health Architecture",
    tagline: "Biological resilience, soil structure, and root zone longevity.",
    description: "Enhancing the rhizosphere through physical aeration, organic matter preservation, and biological stimulants. A resilient soil ecosystem drives stronger root vascular systems and higher natural stress tolerance.",
    category: "Agronomy",
    deliverables: ["Root health indexes", "Soil biology enhancement plans", "Compaction & drainage assessments"],
    metrics: "Active Organic Carbon Tracking",
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "irrigation-fertigation",
    number: "05",
    title: "Irrigation & Fertigation Dynamics",
    tagline: "Water-use efficiency calibrated for Bowen silt and Burdekin delta soils.",
    description: "Optimized run-times, pulse irrigation schedules, and proportional nutrient injection. We ensure root zones stay within field capacity while eliminating leaching beneath the effective root depth.",
    category: "Agronomy",
    deliverables: ["Moisture probe telemetry analysis", "Injection frequency tables", "EC/pH leaching checks"],
    metrics: "Zero Nutrient Zone Leaching",
    image: "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "soil-analysis",
    number: "06",
    title: "Laboratory Soil Analysis",
    tagline: "Scientific geochemical profiling translated into clear commercial decisions.",
    description: "Comprehensive testing covering CEC, exchangeable cations, sodicity, electrical conductivity, and available micronutrients. We interpret raw laboratory reports into plain-English, actionable field actions.",
    category: "Diagnostic",
    deliverables: ["Full geochemical audit report", "Lime & Gypsum amendment rates", "Base saturation rebalancing"],
    metrics: "ASPAC Accredited Lab Partners",
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "leaf-tissue-analysis",
    number: "07",
    title: "Leaf Tissue Diagnostics",
    tagline: "Real-time nutritional status verification before visual deficiency symptoms appear.",
    description: "In-season tissue sampling across leaf blades and petiole sap. Enables surgical mid-season foliar corrections before hidden hungers translate into blossom-end rot, fruit abort, or vigor decline.",
    category: "Diagnostic",
    deliverables: ["Petiole sap nitrate & K readings", "Full-spectrum foliar audits", "Corrective foliar prescriptions"],
    metrics: "Surgical Micronutrient Balances",
    image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "spray-recommendations",
    number: "08",
    title: "Spray Recommendations & Adjuvants",
    tagline: "Compliant, legally sound, and scientifically effective chemical stewardship.",
    description: "Written chemical recommendations with precise application timings, water volumes, adjuvant pairings, buffer requirements, and harvest withholding periods (WHP/ESI) strictly compliant with APVMA standards.",
    category: "Strategic",
    deliverables: ["APVMA-compliant written recs", "Adjuvant & water pH tuning", "Strict withholding period trackers"],
    metrics: "100% Quality & Residue Assurance",
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "planting-planning",
    number: "09",
    title: "Planting & Varietal Planning",
    tagline: "Strategic crop scheduling tailored to regional microclimates and market windows.",
    description: "Pre-season variety selection, plant population density modeling, and row-orientation planning to exploit North Queensland winter and shoulder season marketing windows while mitigating heat spikes.",
    category: "Strategic",
    deliverables: ["Variety heat/cold tolerance maps", "Seeding density calculations", "Staggered planting calendars"],
    metrics: "Optimized Market Peak Alignment",
    image: "https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "pre-harvest-assessments",
    number: "10",
    title: "Pre-Harvest Fruit & Crop Assessments",
    tagline: "Maturity testing, Brix verification, and pack-out grade forecasting.",
    description: "Field audits assessing skin finish, size distribution, internal fruit quality, dry matter, and shelf-life potential. We assist growers in scheduling pick dates to capture premium supermarket and export returns.",
    category: "Diagnostic",
    deliverables: ["Brix and pressure index logs", "Fruit sizing bell curves", "Defect & skin finish scoring"],
    metrics: "Maximized Pack-Out Percentage",
    image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "yield-forecasting",
    number: "11",
    title: "Yield Forecasting & Crop Modeling",
    tagline: "Data-driven production estimates for packing sheds, freight, and buyers.",
    description: "Combining flower counts, fruit set rates, historic regional benchmarks, and current weather models to deliver accurate weekly tonnage forecasts. Prevents packing shed surprises and strengthens forward contracts.",
    category: "Strategic",
    deliverables: ["Bi-weekly yield projections", "Freight volume estimates", "Historical seasonal comparison"],
    metrics: "High Confidence Yield Prediction",
    image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=1200&auto=format&fit=crop"
  }
];

export interface CropItem {
  id: string;
  name: string;
  category: "Horticulture" | "Broadacre" | "Specialty Grain" | "Industrial";
  keyRegions: string[];
  soilTypes: string;
  scoutingFocus: string;
  summary: string;
  image: string;
}

export const CROPS_DATA: CropItem[] = [
  {
    id: "tomatoes",
    name: "Tomatoes (Gourmet & Roma)",
    category: "Horticulture",
    keyRegions: ["Bowen", "Gumlu"],
    soilTypes: "Well-drained sandy loam to alluvial clay",
    scoutingFocus: "Heliothis, Whitefly / TYLCV, Bacterial Spot, Blossom End Rot",
    summary: "North Queensland's premier winter salad crop. High-intensity trellis management requiring rigorous calcium balancing, sap monitoring, and preventative viral vector control.",
    image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "sweetcorn",
    name: "Sweetcorn",
    category: "Horticulture",
    keyRegions: ["Burdekin", "Bowen"],
    soilTypes: "Deep fertile delta soils & medium clay loams",
    scoutingFocus: "Fall Armyworm (Spodoptera frugiperda), Northern Leaf Blight, Tip fill",
    summary: "Fast-cycle crop demanding aggressive Fall Armyworm surveillance from emergence through tassel, paired with synchronized nitrogen pulsing during rapid stem elongation.",
    image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "popcorn",
    name: "Popcorn",
    category: "Specialty Grain",
    keyRegions: ["Burdekin River Plains"],
    soilTypes: "Heavy black self-mulching clay & alluvial loam",
    scoutingFocus: "Cob rot, kernel expansion density, uniform moisture dry-down",
    summary: "Precision specialty grain requiring controlled moisture withdrawal at maturity to guarantee optimal popping expansion volume and test weight.",
    image: "https://images.unsplash.com/photo-1512149673953-1e251807ec7c?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "cotton",
    name: "Cotton",
    category: "Broadacre",
    keyRegions: ["Burdekin Delta", "Upper Burdekin"],
    soilTypes: "Deep cracking clays with high water-holding capacity",
    scoutingFocus: "Nodes Above White Flower (NAWF), Mirids, Mepiquat chloride (PGR) management",
    summary: "Thriving under northern sunshine. Requires delicate vegetative-to-reproductive balance through custom plant growth regulator timing and cut-out date management.",
    image: "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "mung-beans",
    name: "Mung Beans",
    category: "Specialty Grain",
    keyRegions: ["Burdekin", "Bowen Catchment"],
    soilTypes: "Neutral to alkaline loam with moderate drainage",
    scoutingFocus: "Mirids, Podborers, Halo Blight, Powdery Mildew, desiccation timing",
    summary: "High-value rotational pulse fixing atmospheric nitrogen. Critical flower bud scouting for mirids protects pod set and guarantees export sprout grade quality.",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "soybeans",
    name: "Soybeans",
    category: "Broadacre",
    keyRegions: ["Burdekin River Irrigation Area"],
    soilTypes: "Alluvial river clay & structured loam",
    scoutingFocus: "Green Vegetable Bug, Pod suckers, Nodulation efficiency, Phytophthora",
    summary: "Outstanding cane break-crop. Monitored for active nodulation, targeted stink bug suppression at pod fill, and maximum grain protein retention.",
    image: "https://images.unsplash.com/photo-1628102491629-778571d893a3?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "green-beans",
    name: "Green Beans (French / Round)",
    category: "Horticulture",
    keyRegions: ["Bowen", "Gumlu"],
    soilTypes: "Light to medium sand-loam beds with rapid drainage",
    scoutingFocus: "Sclerotinia white mold, Thrips, bean fly, pod straightness",
    summary: "Direct-seeded green beans demanding zero tolerance for pod blemishes or mechanical curve. High-frequency scouting during early flowering ensures flawless packout.",
    image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "hemp",
    name: "Industrial Hemp",
    category: "Industrial",
    keyRegions: ["Burdekin Pilot Regions"],
    soilTypes: "Aerated loams with unrestricted subsoil drainage",
    scoutingFocus: "Day-length photoperiod transitions, fiber/grain ratio, CBD/THC regulatory compliance",
    summary: "Emerging northern alternative fiber and grain crop. Specialized agronomy addressing subtropical photoperiod triggers, weed smothering, and harvest desiccation.",
    image: "https://images.unsplash.com/photo-1568644396922-5c3bfae12521?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "cowpea",
    name: "Cowpea",
    category: "Specialty Grain",
    keyRegions: ["Dry Tropics Catchments", "Burdekin"],
    soilTypes: "Tolerant of lower fertility sandy and gravelly soils",
    scoutingFocus: "Aphid vectors, pod borer, nodulation, drought resilience curves",
    summary: "Hardy tropical legume providing superior soil organic restoration and drought tolerance during hot shoulder seasons between intensive winter horticulture.",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "capsicum",
    name: "Capsicum (Sweet Peppers)",
    category: "Horticulture",
    keyRegions: ["Bowen Coastal Plain"],
    soilTypes: "Deep fertile sandy-loam with high drainage capacity",
    scoutingFocus: "Bacterial Spot (Xanthomonas), Thrips/TSWV, Sunscald, Calcium transport",
    summary: "Cornerstone horticultural crop of Bowen. Intensive drip fertigation and canopy shading management to safeguard fruit walls against intense northern solar radiation.",
    image: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "chilli",
    name: "Chilli (Birdseye, Cayenne, Jalapeño)",
    category: "Horticulture",
    keyRegions: ["Bowen", "Burdekin Coast"],
    soilTypes: "Porous warm sandy loam with organic amendments",
    scoutingFocus: "Anthracnose, Mites, Nematode suppression, Fruit firmness",
    summary: "High-value export and processing crop. Requires precise trace mineral feeding (Boron, Zinc) and strict post-rain preventative fungicide applications.",
    image: "https://images.unsplash.com/photo-1588252303782-cb80119abd6d?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "eggplant",
    name: "Eggplant (Aubergine)",
    category: "Horticulture",
    keyRegions: ["Bowen", "Gumlu"],
    soilTypes: "Warm alluvial loam with high cation exchange capacity",
    scoutingFocus: "Spider Mites, Verticillium Wilt, Calyx greenness, Gloss retention",
    summary: "Long-harvest solanaceous crop requiring continuous structural feeding, careful shoot pruning, and mite predator management to sustain flawless glossy skin.",
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=1000&auto=format&fit=crop"
  }
];

export interface ResearchStage {
  step: string;
  title: string;
  focus: string;
  description: string;
  deliverables: string;
  iconName: string;
}

export const RESEARCH_STAGES: ResearchStage[] = [
  {
    step: "01",
    title: "Trial Establishment & Plot Design",
    focus: "Site Selection, Randomisation & Soil Baselining",
    description: "Statistically robust randomized complete block designs (RCBD) or split-plot trials established in commercial field environments. Complete baseline geochemical soil profiling and GPS boundary logging.",
    deliverables: "Protocol documentation, treatment randomization mapping, baseline soil data.",
    iconName: "Compass"
  },
  {
    step: "02",
    title: "Precision Crop Management",
    focus: "Standardized Field Maintenance & Uniformity",
    description: "Rigorous alignment of trial agronomy with surrounding grower practices. Calibration of precision spray rigs, drip line calibrations, and uniform agronomic inputs to isolate target treatment variables.",
    deliverables: "Chemical application logs, calibrated fertigation sheets, climate logs.",
    iconName: "Sliders"
  },
  {
    step: "03",
    title: "Phenological Monitoring",
    focus: "Growth Stage Staging & Biomass Tracking",
    description: "Continuous vegetative and reproductive stage tracking. Multispectral canopy readings, node counts, flowering date milestones, and stress symptom recordings across all replicates.",
    deliverables: "Phenology progress tables, high-resolution plot photo records, NDRE/NDVI indexes.",
    iconName: "Activity"
  },
  {
    step: "04",
    title: "Quantitative Assessment",
    focus: "Efficacy Scoring & Tissue Sampling",
    description: "Standardized scientific scoring of disease incidence, insect mortality, weed control percentages, or nutrient assimilation via certified laboratory leaf blade and sap analysis.",
    deliverables: "Statistical raw data matrices, ANOVA significance tests, LSD rankings.",
    iconName: "Microscope"
  },
  {
    step: "05",
    title: "Local Field Support",
    focus: "Commercial Ground-Truthing & Grower Feedback",
    description: "Direct liaison between R&D sponsors, research agronomists, and collaborating North Queensland host growers. Ensuring trial interventions represent realistic, scalable on-farm commercial conditions.",
    deliverables: "Host grower debriefs, field walk presentations, commercial scalability notes.",
    iconName: "Users"
  },
  {
    step: "06",
    title: "Results & Actionable Insights",
    focus: "Commercial Translation & Final Reporting",
    description: "Synthesis of raw statistical data into commercial recommendations. Providing clear product efficacy profiles, economic return-on-investment models, and label claim validation data.",
    deliverables: "Comprehensive formal trial report, executive summaries, graphic data decks.",
    iconName: "FileCheck"
  }
];

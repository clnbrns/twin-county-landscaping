export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  publishDate: string;
  category: string;
  readTime: string;
  body: string[];
  faqs?: { q: string; a: string }[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'retaining-wall-cost-texas',
    title: 'Retaining Wall Cost in Texas: $40–$150 Per Face-Foot',
    description:
      'Retaining wall costs in Texas: $40–$80/face-foot for block, $70–$150 for stone. See what drives the price — and why the cheapest quote usually costs more later.',
    publishDate: '2026-06-20',
    category: 'Retaining Walls',
    readTime: '6 min read',
    body: [
      'If you have gotten a couple of quotes for a retaining wall and noticed a wide spread between the low number and the high number, you are not imagining things. Retaining walls are one of the most variable-cost projects in landscaping, and that variance comes from real differences in how the wall is built — not just contractor markup. In North Texas, expect to pay roughly $40–$80 per face-foot for concrete block (Allan Block, Versa-Lok, or similar) and $70–$150 per face-foot for natural or cultured stone. A "face-foot" is one foot wide by one foot tall of finished wall face, so a wall that is 20 feet long and 3 feet tall is 60 face-feet.',
      'The biggest price driver is what is behind the wall and below it — work you will never see once the project is done. A properly built retaining wall needs a compacted gravel base, a drainage aggregate backfill, perforated pipe running to a daylight outlet, and geogrid reinforcement for walls over about three feet tall. Contractors who skip these steps can cut their price significantly. The wall will look fine for a year or two. Then the soil behind it saturates during a heavy rain, the pressure builds, and the wall bows or blows out. The repair typically costs more than doing it right the first time.',
      'Wall height changes the math fast. A two-foot garden wall is straightforward. Once you pass four feet, structural requirements increase, and in many Texas municipalities a wall over four feet requires a permit and, in some cases, a stamped engineer drawing. If your contractor is quoting a tall wall without mentioning permits, ask about it directly. A wall that fails inspection — or gets flagged when you sell the house — is a serious problem.',
      'Material choice affects both cost and long-term appearance. Concrete block is the workhorse: consistent dimensions, predictable labor, easy to source, and it holds up well in Texas heat and freeze cycles. Natural limestone or fieldstone costs more and takes longer to set, but the look is distinct and it ages well. Poured concrete block (CMU) with rebar is common for commercial or very heavy loads. Most residential walls in Western DFW are concrete block because it balances cost, durability, and visual appeal.',
      'The other factor that moves price is access. A wall along a flat, open backyard costs less to build than one tucked against a fence line, next to a pool, or on a steep hillside where equipment cannot reach. Narrow access means more hand work, slower installs, and higher labor cost. When you get quotes, make sure the contractor has actually walked the site — a number generated from a photo or a phone description is not reliable.',
      'One final note: if a quote comes in dramatically below the others, ask what is included. The difference is almost always in the base preparation, the drainage plan, or the geogrid. A wall that costs $12,000 to build right is not the same project as one quoted at $7,000 that skips the drainage. Ask every contractor to walk you through those details specifically before you sign anything.',
    ],
    faqs: [
      {
        q: 'Do I need a permit for a retaining wall in Texas?',
        a: 'It depends on your city and wall height. Most municipalities in the DFW area require a permit for walls over four feet tall measured from the base. Some cities require permits for any structural wall. Always check with your city before starting, and ask your contractor if they handle the permit process.',
      },
      {
        q: 'How long does a retaining wall last in Texas?',
        a: 'A properly built concrete block or stone retaining wall should last 30–50 years or more. The main failure points are inadequate drainage behind the wall and a poor compacted base. Texas clay soil holds water and expands, so drainage is especially critical here.',
      },
      {
        q: 'Can I build a retaining wall myself to save money?',
        a: 'For small garden walls under two feet, DIY is reasonable if you are comfortable with the physical work. Once you are dealing with any meaningful load — a slope, a driveway, a structure uphill — the drainage and structural requirements make professional installation a much safer bet. A failed wall can damage your home\'s foundation or a neighbor\'s property.',
      },
      {
        q: 'What is the cheapest type of retaining wall?',
        a: 'Concrete block (Allan Block, Versa-Lok, etc.) is typically the most cost-effective option that still holds up long-term. Railroad ties and timber walls are cheaper upfront but rot over time and are not a good long-term solution in Texas, where humidity and termites accelerate decay.',
      },
    ],
  },
  {
    slug: 'why-north-texas-yard-floods',
    title: 'Why Does My North Texas Yard Flood After Every Rain?',
    description:
      'North Texas yards flood due to clay soil, poor builder grading, and overwhelmed downspouts. Here is how to diagnose the problem and what a real fix looks like.',
    publishDate: '2026-06-10',
    category: 'Drainage',
    readTime: '5 min read',
    body: [
      'If your yard turns into a pond after every decent rain, you are not alone. Flooding and standing water are among the most common complaints we hear from homeowners across Aledo, Keller, Saginaw, and the rest of Western DFW. The good news is that yard flooding almost always has a diagnosable cause — and most of the time, it is one of three things: clay soil, builder grading that never worked right, or downspouts dumping water against the house.',
      'North Texas sits on some of the most clay-heavy soil in the country. Clay does not drain — it swells when wet, seals up, and sheds water sideways instead of letting it percolate down. This means that even in a yard with reasonable slope, the surface water cannot go anywhere fast enough during a heavy rain. The water ponds until it slowly evaporates or runs off wherever gravity pulls it. You can watch this happen in real time: after a hard summer storm, the water just sits. New construction lots are especially prone to this because the topsoil was stripped during construction and what is left is dense clay subsoil with almost no organic content.',
      'Builder grading is the second culprit. When a house is built, the lot is graded to drain away from the foundation. In theory. In practice, builders grade quickly to get to the next stage, and the finish grade often settles unevenly over the first few years. Areas that looked fine at move-in start pooling water as the soil compacts and settles. Low spots form along fence lines, behind detached garages, and in side yards — and because those spots are already low, water from the rest of the yard runs straight into them.',
      'Downspouts are underrated as a flooding cause. A typical roof sheds an enormous amount of water during a storm — much more than most homeowners realize. If your downspouts dump that water two feet from the house foundation, against a fence, or into an already-low area, you are concentrating a huge volume of water into a spot that cannot handle it. Extending downspouts, adding splash blocks, or running underground drain pipes from downspouts to a better discharge point is sometimes all it takes to eliminate what looked like a major drainage problem.',
      'The fix depends on the cause. For clay soil and poor percolation, a French drain — a perforated pipe buried in gravel — intercepts the subsurface water and routes it to a safe discharge point. For low spots caused by grading, regrading the yard to establish positive slope away from problem areas is often the right answer, sometimes combined with a catch basin or channel drain to collect surface water. For downspout issues, underground drain lines from each downspout to a street or swale discharge point can eliminate the problem entirely. Many yards need a combination of all three.',
    ],
    faqs: [
      {
        q: 'How do I know if my yard has a French drain or existing drainage?',
        a: 'Look for a cleanout cap, a grated catch basin, or a pipe outlet along the fence or at the street. Many homes — especially newer construction — have no underground drainage at all. If you are not sure, a landscaping company can walk the yard and check.',
      },
      {
        q: 'Will regrading my yard fix the flooding?',
        a: 'Regrading helps when the problem is that water does not have a path to flow away from the wet area. But if your soil is pure clay, regrading alone may not be enough — the water will just find the new low spot. In most cases, regrading works best paired with drainage infrastructure.',
      },
      {
        q: 'How much standing water is normal after a rain?',
        a: 'Some temporary ponding in low areas right after a heavy rain is normal. What is not normal is water still standing 24–48 hours later, water pooling against your foundation, or consistent wet areas that never fully dry out between rains. Those all signal a drainage problem worth addressing.',
      },
      {
        q: 'Can I fix yard drainage myself?',
        a: 'Simple downspout extensions and splash blocks are easy DIY fixes. Regrading and French drain installation involve moving significant amounts of material, and getting the pipe slope and discharge point right is important — a French drain that does not drain anywhere is useless. Most homeowners get better results having a professional design the system.',
      },
    ],
  },
  {
    slug: 'french-drain-vs-dry-creek-bed',
    title: 'French Drain vs. Dry Creek Bed: Which One Actually Works?',
    description:
      'French drains handle subsurface water. Dry creek beds manage surface runoff. Here is an honest comparison of when each works — and when people pick the wrong one.',
    publishDate: '2026-05-28',
    category: 'Drainage',
    readTime: '5 min read',
    body: [
      'We get asked this question a lot, and the honest answer is that French drains and dry creek beds solve different problems. Choosing between them is not really a style preference — it is a diagnosis question. Pick the wrong one and you will still have a wet yard, just with more landscaping in it.',
      'A French drain is an underground system. You dig a trench, lay perforated pipe in a bed of gravel, and cover it. Water enters the gravel and pipe from below and around it, flows by gravity to a discharge point, and the surface above stays mostly dry. French drains are designed for subsurface water movement — areas where the water table rises, where clay soil holds water at the root zone, or where you need to intercept water migrating from uphill before it reaches a low spot. Because it is underground, a French drain is essentially invisible once installed.',
      'A dry creek bed is a surface feature. It is a channel — usually lined with river rock or boulders — that gives fast-moving surface water a defined path to travel during rain events instead of sheet-flowing across your yard or patio. It does not move subsurface water at all. A well-designed dry creek bed can look beautiful: a natural-looking rock channel that doubles as a landscape feature when it is dry. But if your problem is standing water that sits for days after rain, a dry creek bed will not fix it. Water needs somewhere to go, and a creek bed just channels it — it does not make it disappear.',
      'People pick the wrong solution most often in two situations. First, they have standing water and install a dry creek bed because it looks nicer than a French drain. The creek bed does nothing for water that is already sitting in place — it only helps water that is actively flowing across a surface. Second, they have a yard that sheet-flows water during storms and install a French drain, which is designed for slower subsurface infiltration, not for channeling a surge of surface runoff during a heavy downpour. For fast surface flows, you often need a channel drain, a catch basin, or a defined swale — not just a perforated pipe in gravel.',
      'The best drainage solutions often combine both approaches. A yard with a chronic wet area and a slope that sheet-flows water during storms might need a French drain to handle the subsurface saturation and a dry creek bed (or a swale) to give storm runoff a route to travel. A good contractor will walk the yard during or after a rain if possible, watch where water comes from and where it goes, and design a system that actually matches the problem. Ask any contractor you meet with to describe the problem they are solving — not just the product they are installing.',
    ],
    faqs: [
      {
        q: 'How much does a French drain cost in Texas?',
        a: 'Most residential French drain projects run $1,500–$5,000 depending on length, depth, and how far the pipe needs to run to reach a discharge point. Complex systems with multiple catch basins or long runs can cost more. Get a scope-of-work document so you know exactly what is included.',
      },
      {
        q: 'Do dry creek beds require maintenance?',
        a: 'Yes. Rock and gravel collect leaves, sediment, and debris over time, especially at the low end of the channel. Plan to flush or clean the bed annually and clear any debris that accumulates at the outlet. They are low-maintenance but not no-maintenance.',
      },
      {
        q: 'Can a French drain handle heavy Texas storm runoff?',
        a: 'A standard French drain (4-inch perforated pipe) is sized for gradual subsurface water movement, not for channeling a heavy rainstorm surge. For yards that get large volumes of surface runoff fast, you typically need a catch basin, a larger drain pipe, or a surface channel drain in addition to or instead of a standard French drain.',
      },
      {
        q: 'Will a dry creek bed work in clay soil?',
        a: 'A dry creek bed can work in clay soil as a surface channel — it does not depend on the soil absorbing water. However, if you are hoping the rock channel will let water percolate into the ground, clay soil will prevent that. The creek bed will still function as a flow path, but the water will need to discharge somewhere rather than soak in.',
      },
    ],
  },
  {
    slug: 'best-sod-for-texas-clay-soil',
    title: 'The Best Sod for Texas Clay Soil (and How to Keep It Alive)',
    description:
      'Bermuda, Zoysia, and St. Augustine each perform differently in Western DFW clay. Here is which sod actually works for Texas clay — and the prep and watering steps that make or break it.',
    publishDate: '2026-05-15',
    category: 'Lawn & Sod',
    readTime: '6 min read',
    body: [
      'Choosing sod for a North Texas yard is not just a grass preference question — clay soil changes the equation significantly. Clay holds water longer than sandy or loamy soil, drains poorly, compacts under foot traffic, and expands and contracts with moisture changes. The wrong grass in those conditions will struggle no matter how well you water it. The right grass, installed correctly, can establish quickly and look good for years.',
      'Bermuda grass is the workhorse of Western DFW lawns, and for good reason. It tolerates heat, drought, and clay soil better than almost any other warm-season grass. It spreads aggressively through runners, which means it fills in bare spots on its own and recovers from damage quickly. Bermuda does go dormant and turn brown in winter, which some homeowners dislike. It also requires full sun — if your yard has significant shade from trees or structures, Bermuda will thin out in those areas. For open, sunny yards in Aledo, Weatherford, or Keller, Bermuda is usually the right call.',
      'Zoysia is the upgrade pick for homeowners who want a finer texture and better shade tolerance. It handles clay reasonably well and stays green slightly longer into fall than Bermuda. The tradeoff is that Zoysia establishes more slowly and is more expensive per pallet — and it still goes dormant in winter. Zoysia also does not recover from damage as quickly as Bermuda, so it is not ideal if you have pets or heavy foot traffic. In part-sun situations, Zoysia often outperforms Bermuda significantly.',
      'St. Augustine is the shade option. If you have large trees casting heavy shade across your yard, St. Augustine is typically the only warm-season grass that will stay dense and green under those conditions. It is coarser-textured than Bermuda or Zoysia, requires more water, and is less drought-tolerant — which matters during Texas summers. St. Augustine is also more susceptible to chinch bugs and grub damage. However, in deep shade where nothing else works, St. Augustine is often your best choice.',
      'Preparation matters more than grass selection. In clay soil, the biggest mistake is laying sod directly on compacted clay subsoil without amendment. Before installation, the soil should be tilled at least four inches deep, and a layer of good compost or topsoil should be incorporated to improve drainage and give roots somewhere to grow. Scalp the existing grass if it is a renovation, remove debris and rocks, and grade the area so water drains away from the house. Sod laid over unprepared clay will root shallowly, stress during summer heat, and develop thin patches within a season.',
      'Watering truth: new sod in Texas summer needs water every day for the first two to three weeks — sometimes twice a day in peak heat. After establishment (when you cannot easily pull up a corner of sod), you back off significantly. Overwatering established sod promotes fungal disease and shallow roots. Once the grass is rooted in, most warm-season grasses in North Texas do fine with one to two deep watering sessions per week during the growing season, and very little or none during dormancy. Your goal is to water deeply and infrequently so roots chase water downward through the clay rather than staying shallow.',
    ],
    faqs: [
      {
        q: 'When is the best time to lay sod in North Texas?',
        a: 'Late spring through early summer (April through June) is ideal for warm-season grasses like Bermuda, Zoysia, and St. Augustine. The soil is warm, which promotes fast root establishment. Avoid laying in peak summer heat (July–August) if possible — sod installed then requires intensive watering and is more vulnerable to heat stress.',
      },
      {
        q: 'How much does sod installation cost in Western DFW?',
        a: 'Expect to pay $1.50–$3.00 per square foot installed, depending on grass type, yard size, and how much prep work is needed. Bermuda is typically on the lower end; Zoysia is higher. Yards requiring significant regrading or soil amendment will cost more.',
      },
      {
        q: 'Should I aerate clay soil before laying sod?',
        a: 'For new sod installation, tilling is more effective than aeration. Aeration helps existing established lawns but does not provide the soil breakup and amendment mixing needed for a good sod bed. Till the area, add compost, and grade it properly before laying new sod.',
      },
      {
        q: 'Can I lay sod over existing dead grass?',
        a: 'No. Sod laid over dead grass and thatch will not root properly and will almost certainly fail within a season. The dead material acts as a barrier between the sod roots and the soil beneath. Scalp and remove existing vegetation, then prepare the soil before installing new sod.',
      },
    ],
  },
  {
    slug: 'how-long-do-pavers-last',
    title: 'How Long Do Pavers Last? (And What Makes Them Fail Early)',
    description:
      'Quality pavers last 20–50 years — but only if the base is built right. Learn what the base actually requires, what polymeric sand does, and the most common reasons paver projects fail.',
    publishDate: '2026-05-05',
    category: 'Hardscaping',
    readTime: '5 min read',
    body: [
      'Pavers themselves are extremely durable — concrete pavers are typically rated for 50+ years, and natural stone pavers can last a century or more. So when a paver patio starts sinking, shifting, or growing weeds through every joint within a few years of installation, the pavers are almost never the problem. The failure is almost always in the base.',
      'A properly built paver base in North Texas requires excavation to a minimum of six to eight inches below finish grade, followed by a layer of compacted crushed limestone or road base aggregate, then a one-inch bedding layer of coarse sand or stone dust, then the pavers, then joint fill. Each layer has to be compacted correctly. If the base is not compacted in lifts — meaning compacted progressively as material is added, not all at once at the end — it will settle unevenly over time. Even a half-inch of uneven settlement makes a paver surface look wavy and creates trip hazards.',
      'Texas clay soil makes this especially challenging. Clay expands when wet and contracts when dry, which means the ground underneath a paver base is moving seasonally. A good base compensates for this by creating a stable, well-drained aggregate layer that clay movement cannot easily disturb. A thin or poorly compacted base transmits every clay shift directly to the paver surface above. This is why pavers in Texas installed by inexperienced contractors often fail within two to three years even though the same design would last decades in a different region with more stable soil.',
      'Polymeric sand is the other variable that significantly affects longevity. Regular sand washed out of paver joints leads to joint widening, weed growth, and loss of interlock between pavers. Polymeric sand is a sand-polymer blend that, when dampened and allowed to cure, binds into a firm material that stays in the joints, resists washout, and blocks weed seed germination. It is not permanent — it typically needs to be refreshed every five to ten years — but it dramatically outperforms regular sand. Any paver installation that uses plain sand in the joints is going to need attention sooner.',
      'The most common early failures we see in Western DFW: base compaction done in one pass instead of lifts; base material that is too thin (three inches instead of six to eight); pavers installed without edge restraints so they spread outward over time; and regular sand in the joints that washes out in the first year. Ask any paver contractor exactly how deep they excavate, how many passes they make with the plate compactor, and what they use in the joints. If the answers are vague, that is a red flag.',
    ],
    faqs: [
      {
        q: 'Can sunken pavers be repaired without replacing the whole patio?',
        a: 'Yes, in most cases. A good hardscape contractor can lift the sunken section, add base material, recompact, and re-lay the pavers. The pavers themselves are usually undamaged and can be reused. This is one of the genuine advantages of pavers over poured concrete — repairs are localized and relatively affordable.',
      },
      {
        q: 'Do pavers need to be sealed?',
        a: 'Sealing is optional but beneficial. A quality sealer enhances color, makes the surface easier to clean, and can help lock in polymeric sand. Concrete pavers should be sealed about six months after installation (to allow for initial curing and settling) and resealed every three to five years.',
      },
      {
        q: 'How do you stop weeds from growing in paver joints?',
        a: 'Polymeric sand is the most effective preventive measure. If weeds are already established in joints, remove them, clean out the old sand, and refill with polymeric sand. Spot-treating with a non-selective herbicide can help with persistent weeds, but getting the joints properly filled is the real long-term solution.',
      },
      {
        q: 'Are thicker pavers better?',
        a: 'For pedestrian patios and walkways, standard 60mm (about 2.3 inch) pavers are sufficient. For driveways or areas with vehicle traffic, 80mm pavers are recommended. Thicker is not necessarily better for foot-traffic areas — base preparation matters far more than paver thickness.',
      },
    ],
  },
  {
    slug: 'paver-patio-vs-concrete-which-is-better',
    title: 'Paver Patio vs. Poured Concrete: Which Is Better for Your Yard?',
    description:
      'Pavers cost more upfront but repair easily. Poured concrete is cheaper initially but cracks in Texas heat. Here is an honest side-by-side for Western DFW homeowners.',
    publishDate: '2026-06-02',
    category: 'Hardscaping',
    readTime: '6 min read',
    body: [
      'Poured concrete and concrete pavers are both solid hardscaping choices — and both will look great on day one. The real differences show up over five to ten years, and they depend a lot on how Texas weather and soil treat the material. Here is an honest comparison without the sales pitch.',
      'Cost upfront: poured concrete wins. Stamped concrete is typically $15–$25 per square foot installed. Standard pavers run $20–$35 per square foot for a quality installation with proper base work. The gap narrows on larger projects where mobilization costs spread out, but in general, concrete is the lower initial cost. For homeowners on a tighter budget who want a finished outdoor surface now, concrete is a reasonable choice.',
      'Durability in Texas heat and clay: this is where the comparison gets more nuanced. Texas summers are brutal, and clay soil expands and contracts significantly with moisture changes. Poured concrete does not flex — when the ground moves under it, it cracks. Hairline cracks are cosmetic; structural cracks let water in and accelerate damage. Properly installed concrete with adequate rebar or wire mesh and control joints performs better, but cracking is still a common outcome in our clay-heavy soil within five to ten years. Pavers, by contrast, are individual units that move independently — they can accommodate minor ground movement without cracking. The flexibility that makes pavers feel premium is also what makes them more forgiving in shifting soil.',
      'Repair is the biggest practical difference. If a section of poured concrete cracks badly, your options are grind and resurface (which shows), patch (which almost never matches), or tear out and replace. Tear-out is expensive and disruptive. With pavers, a sunken or cracked section means lifting that area, fixing the base, and re-laying the same pavers — often undetectable when done well. This repairability is why pavers hold their value better and why many homeowners on their second patio choose pavers even though they cost more up front.',
      'Aesthetics and customization: pavers offer more variety — shapes, colors, patterns, and the ability to mix materials. A herringbone paver patio with a contrasting border is not achievable in poured concrete. Stamped concrete can approximate some looks but tends to look dated faster and fades unevenly over time. Pavers maintain their color better (especially if sealed) and can be updated by swapping in different units or patterns.',
      'The bottom line: for a permanent outdoor living space — a patio you will use daily and that you want to last 20+ years — pavers are usually the better investment once you account for repair costs and longevity. For a utilitarian surface like an AC pad, a service walk, or a large driveway where aesthetics are secondary and budget is the primary driver, poured concrete is a completely reasonable choice. For anything in between, it comes down to how long you plan to stay in the home and how much the appearance and repairability matter to you.',
    ],
    faqs: [
      {
        q: 'Does poured concrete crack in Texas?',
        a: 'Yes, cracking is common in North Texas due to clay soil movement and extreme heat cycles. Proper base preparation, adequate concrete thickness (at least four inches for foot traffic), rebar or wire mesh reinforcement, and control joints reduce cracking — but cannot eliminate it entirely. Most concrete patios in our area develop some cracking within five to ten years.',
      },
      {
        q: 'Can you put pavers over existing concrete?',
        a: 'Sometimes, but it is not always a good idea. The existing concrete has to be in solid, level condition — any cracking or unevenness will telegraph through the pavers over time. The finished surface will also be higher than the original, which can affect drainage and transitions to doors. A professional assessment of the existing slab is important before deciding.',
      },
      {
        q: 'How long does a paver patio last in Texas?',
        a: 'A properly installed paver patio with a quality base should last 25–50 years or more. The pavers themselves are nearly indestructible. What wears out is the joint material and potentially the base if drainage was not handled well — both of which can be maintained or repaired without replacing the whole patio.',
      },
      {
        q: 'Is stamped concrete worth it?',
        a: 'Stamped concrete looks sharp on installation day and costs less than pavers. The downside is that it is still concrete — it will crack, and when it does, the stamped pattern makes repairs much more visible. The color and texture also fade over time without regular sealing. It is a reasonable middle-ground choice for homeowners who want something more interesting than plain concrete but are comfortable with the maintenance tradeoffs.',
      },
    ],
  },
];

export const BLOG_BY_SLUG = Object.fromEntries(BLOG_POSTS.map((p) => [p.slug, p]));

/** @param {NS} ns */
export async function main(ns) {
  const serverList = ["sigma-cosmetics",
                        "joesguns",
                        "nectar-net",
                        "hong-fang-tea",
                        "harakiri-sushi",
                        "neo-net",
                        "zer0",
                        "max-hardware",
                        "iron-gym"];
  
  for (let i = 0; i < serverList.length; ++i) {
    const serv = serverList[i];
    ns.tprint("This serv " +serv+ " bhas max money of: " + (ns.getServerMaxMoney(serv)/1000000+"M"));
    ns.tprint("This serv " +serv+ " has this much currently: " + (ns.getServerMoneyAvailable(serv)/1000000+"M"))
    ns.tprint("This serv " +serv+ " has min security: " + ns.getServerMinSecurityLevel(serv))
    ns.tprint("This serv " +serv+ " security currently at: " + ns.getServerSecurityLevel(serv))
    
  }

}

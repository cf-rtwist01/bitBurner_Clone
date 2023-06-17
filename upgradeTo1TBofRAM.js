/** @param {NS} ns */
export async function main(ns) {
  let servers = ns.scan();
  // ns.tprint(servers)
  for (let i=0;i<servers.length;++i){
    // ns.tprint(servers[i]);
    let serv = servers[i];
    if (serv.match("^pserv")){
      // ns.tprint(serv);
      // ns.tprint("Current server: "+serv+"has "+ns.getServerMaxRam(serv)+"RAM");
      if (ns.getServerMaxRam(serv)<1024){
        ns.tprint("This server has less than 1024MB of RAM: " +serv+"\nIt only has: "+ns.getServerMaxRam(serv));
        ns.upgradePurchasedServer(serv,1024)
        ns.tprint("Now it has: " +ns.getServerMaxRam(serv))
      }
    }
    
  }

}

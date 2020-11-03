const getMissionsData = (missions = []) =>
  missions.map((mission) => {
    const {
      mission_name: missionName,
      mission_id: missionsIds = [],
      launch_year: year = "",
      launch_success = false,
      rocket = {},
      links = {},
    } = mission;
    const imageUrl = links.mission_patch_small;
    const { first_stage } = rocket;
    const landing = first_stage.cores.every((core) => core.land_success);
    const launch = launch_success === null ? false : launch_success;
    return { missionName, missionsIds, year, landing, launch, imageUrl };
  });

export default getMissionsData;

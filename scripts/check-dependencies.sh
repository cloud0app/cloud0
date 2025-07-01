echo -e "CHECKING ====> WEB APP\n"
cd apps/web && depcheck

echo -e "CHECKING ====> API APP\n\n\n"
cd ../api/ && depcheck

echo -e "CHECKING ====> PKG DATABASE\n\n\n"
cd ../../packages/database/ && depcheck

echo -e "CHECKING ====> PKG EMAIL\n\n\n"
cd ../email/ && depcheck

echo -e "CHECKING ====> PKG TYPESCRIPT-CONFIG\n\n\n"
cd ../typescript-config/ && depcheck

echo -e "CHECKING ====> PKG UI\n\n\n"
cd ../ui/ && depcheck

echo -e "CHECKING ====> PKG UTILS\n\n\n"
cd ../utils/ && depcheck
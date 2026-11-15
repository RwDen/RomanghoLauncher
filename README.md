# Romangho 1.0.0

로망호 런처·모드팩·관리자 툴박스의 정식 파일 배포입니다. 파일 공개와 Minecraft 운영 서버의 적용·개방은 별도 단계입니다. 이번 게시에서는 운영 서버를 변경하지 않았습니다.

- [Windows 런처 1.0.0](https://github.com/RwDen/RomanghoLauncher/releases/tag/v1.0.0)
- [클라이언트·서버 모드팩 1.0.0](https://github.com/RwDen/RomanghoLauncher/releases/tag/client-pack-v1.0.0)
- [관리자 툴박스 1.0.0](https://github.com/RwDen/RomanghoLauncher/releases/tag/toolbox-v1.0.0)
- [웹사이트](https://rw-den.vercel.app/romangho-launcher/)
- [파일 SHA-256·버전 대응표](releases/1.0.0/release-index.json)

Minecraft 26.2 / Fabric Loader 0.19.5 / Java 25. 클라이언트 144개·서버 101개 모드. 내부 모드의 검증된 버전은 유지합니다.

## 설치와 업데이트
런처 ZIP 전체를 풀고 최상위 RomanghoValley.Launcher.exe를 실행하세요. app 폴더를 함께 보관하고, 업데이트할 때 기존 data 폴더를 보존하세요. Microsoft 계정과 Minecraft Java 이용 권한이 필요합니다. 런처·툴박스의 자체 업데이트는 각각 ZIP 교체 방식입니다.

모드팩은 기존 운영 공개키로 서명한 client-packs/stable.json을 검증합니다. 제품 버전 1.0.0과 배포 revision 54는 서로 다른 값입니다. 신규 설치 기본 셰이더는 Complementary Reimagined이고 기존 사용자 음량·셰이더·개인 설정은 보존합니다.

관리자 툴박스 서버 기능은 별도 에이전트·root 소유 정책·SSH 키·호스트 지문 설정이 필요하며 기본값은 접근 거부입니다. 이번 배포에서 운영 서버에 설치하지 않았습니다. 공지 관리 기능은 기존 사용자별 GitHub 인증을 사용합니다.

## 운영 안전
서버 패치에는 정상 종료·동일 시점 전체 백업·복원 검증이 선행되어야 합니다. 저장이 불확실하면 emergency 상태를 유지하고 자동 재시작하지 않습니다. Linux 서비스·guard·관리 에이전트 실제 연동은 개방 전 확인 대상입니다.

## Website source
website/site의 정적 파일을 기존 rw-den Vercel 프로젝트로 배포합니다. assets 목록은 website/site/assets-sources.json에 기존 공개 파일의 URL·해시로 고정했습니다. 기존 배포는 CLI 방식이며 Git 자동 배포 연결은 확인되지 않았습니다.

Independent community software, not an official Minecraft or Microsoft product. Third-party mods and shaders retain their respective licenses.

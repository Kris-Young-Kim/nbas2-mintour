# 배포 가이드

## 🚀 빠른 배포

### 자동 배포 (권장)

```bash
# 빌드 테스트 포함 배포
pnpm deploy "커밋 메시지"

# 빌드 테스트 없이 빠른 배포
pnpm deploy:quick "커밋 메시지"

# 배포 상태만 확인
pnpm deploy:check
```

### 예시

```bash
# 일반 배포
pnpm deploy "feat: add new feature"

# 빠른 배포 (빌드 스킵)
pnpm deploy:quick "fix: typo correction"
```

## 📋 배포 프로세스

### 1. 자동 배포 스크립트 (`pnpm deploy`)

자동으로 다음을 수행합니다:
1. ✅ 변경사항 확인
2. ✅ 빌드 테스트 (선택적)
3. ✅ 모든 변경사항 스테이징
4. ✅ 커밋 생성
5. ✅ 원격 저장소에 푸시
6. ✅ 동기화 상태 확인

**옵션:**
- `-SkipBuild`: 빌드 테스트 건너뛰기
- `-SkipPush`: 푸시만 건너뛰기

### 2. 배포 상태 확인 (`pnpm deploy:check`)

다음을 확인합니다:
- Git 작업 디렉토리 상태
- 로컬과 원격 브랜치 동기화
- 최근 커밋 내역
- 필수 파일 존재 여부

## 🔧 수동 배포

필요한 경우 수동으로도 배포할 수 있습니다:

```bash
# 1. 변경사항 확인
git status

# 2. 빌드 테스트
pnpm build

# 3. 변경사항 추가
git add .

# 4. 커밋
git commit -m "커밋 메시지"

# 5. 푸시
git push origin main
```

## ⚠️ 주의사항

1. **빌드 실패 시**: 스크립트가 빌드 실패를 감지하면 계속할지 물어봅니다.
2. **커밋 메시지**: 의미 있는 커밋 메시지를 작성하세요.
3. **Vercel 자동 배포**: `main` 브랜치에 푸시하면 Vercel이 자동으로 배포를 시작합니다.

## 🔍 문제 해결

### 배포 상태 확인
```bash
pnpm deploy:check
```

### 빌드 오류 확인
```bash
pnpm build
```

### Git 상태 확인
```bash
git status
git log --oneline -5
```

## 📝 커밋 메시지 컨벤션

- `feat: 새로운 기능 추가`
- `fix: 버그 수정`
- `docs: 문서 수정`
- `style: 코드 포맷팅`
- `refactor: 코드 리팩토링`
- `test: 테스트 추가`
- `chore: 빌드 설정 변경`


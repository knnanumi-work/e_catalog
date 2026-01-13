# GitHub 푸시 문제 해결 가이드

## 문제 원인 분석

### 1. 근본 원인
- **GitHub 저장소가 존재하지 않음**: `knnanumi-work/e_catalog` 저장소가 GitHub에 생성되지 않은 상태였음
- **인증 문제**: HTTPS 방식으로 푸시 시 사용자 인증 정보를 읽을 수 없음

### 2. 발생한 에러들

#### 첫 번째 에러
```bash
fatal: could not read Username for 'https://github.com': Device not configured
```
- HTTPS 방식으로 푸시할 때 인증 정보가 없어서 발생
- GitHub CLI는 SEUNGHYUN-JIN 계정으로 로그인되어 있었음

#### 두 번째 에러
```bash
remote: Repository not found.
fatal: repository 'https://github.com/knnanumi-work/e_catalog.git/' not found
```
- GitHub에 해당 저장소가 생성되지 않았거나, 접근 권한이 없음
- knnanumi-work 계정은 존재하지만 공개 저장소가 0개였음

### 3. 왜 knnanumi_odering 프로젝트는 작동했는가?

knnanumi_odering 프로젝트의 git config를 확인한 결과:

```ini
[remote "origin"]
    url = https://ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx@github.com/knnanumi-work/knnanumi-ordering.git

[user]
    name = knnanumi
    email = knnanumi@gmail.com
```

**핵심 차이점:**
- Remote URL에 **Personal Access Token(PAT)이 직접 포함**되어 있음
- 로컬 프로젝트 설정에 **knnanumi 사용자 정보**가 명시되어 있음
- 이미 **GitHub에 저장소가 생성**되어 있었음

---

## 해결 방법

### 적용한 솔루션

1. **GitHub API를 사용하여 저장소 생성**
   ```bash
   curl -X POST -H "Authorization: token ghp_XXX..." \
        -H "Accept: application/vnd.github.v3+json" \
        https://api.github.com/user/repos \
        -d '{"name":"e_catalog","private":false}'
   ```

2. **로컬 git 사용자 정보 설정**
   ```bash
   git config --local user.name "knnanumi"
   git config --local user.email "knnanumi@gmail.com"
   ```

3. **원격 URL에 PAT 포함**
   ```bash
   git remote set-url origin https://ghp_XXX...@github.com/knnanumi-work/e_catalog.git
   ```

4. **푸시**
   ```bash
   git push -u origin main
   ```

---

## 새 프로젝트에 적용하는 작업 순서

### 전제 조건
- Personal Access Token(PAT) 준비: `ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`
- GitHub 계정: `knnanumi-work`

### Step 1: 로컬 Git 저장소 초기화 (신규 프로젝트인 경우)

```bash
cd /path/to/your/project
git init
git add .
git commit -m "Initial commit"
```

### Step 2: GitHub에 저장소 생성

#### 방법 A: GitHub API 사용 (CLI에서 바로 실행)
```bash
curl -X POST \
  -H "Authorization: token ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" \
  -H "Accept: application/vnd.github.v3+json" \
  https://api.github.com/user/repos \
  -d '{"name":"프로젝트명","private":false,"description":"프로젝트 설명"}'
```

#### 방법 B: GitHub 웹사이트에서 수동 생성
1. https://github.com/new 접속
2. knnanumi-work 계정으로 로그인
3. Repository name 입력
4. Create repository 클릭

### Step 3: 로컬 Git 설정

```bash
# 프로젝트 디렉토리에서 실행
cd /path/to/your/project

# 로컬 사용자 정보 설정
git config --local user.name "knnanumi"
git config --local user.email "knnanumi@gmail.com"
```

### Step 4: 원격 저장소 연결 (PAT 포함)

#### 신규 프로젝트 (remote가 없는 경우)
```bash
git remote add origin https://ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx@github.com/knnanumi-work/프로젝트명.git
```

#### 기존 프로젝트 (remote가 이미 있는 경우)
```bash
git remote set-url origin https://ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx@github.com/knnanumi-work/프로젝트명.git
```

### Step 5: 브랜치 설정 및 푸시

```bash
# 현재 브랜치 확인
git branch

# main 브랜치가 아니면 main으로 변경 (필요시)
git branch -M main

# 원격 저장소에 푸시
git push -u origin main
```

### Step 6: 설정 확인

```bash
# 원격 저장소 확인 (PAT이 포함된 URL이 보여야 함)
git remote -v

# 로컬 설정 확인
git config --local --list

# 푸시 테스트
git push
```

---

## 체크리스트

새 프로젝트를 설정할 때 다음 항목들을 확인하세요:

- [ ] GitHub에 저장소가 생성되어 있는가?
- [ ] `git config --local user.name`이 "knnanumi"로 설정되어 있는가?
- [ ] `git config --local user.email`이 "knnanumi@gmail.com"로 설정되어 있는가?
- [ ] `git remote -v`에서 URL에 PAT이 포함되어 있는가?
- [ ] `git branch`에서 main 브랜치에 있는가?
- [ ] 커밋이 최소 1개 이상 있는가?

---

## 보안 주의사항

### Personal Access Token 관리

1. **토큰 노출 방지**
   - `.git/config` 파일에 토큰이 포함되므로 이 파일을 공유하지 말 것
   - `git remote -v` 출력을 스크린샷이나 로그로 공유하지 말 것

2. **토큰 권한 최소화**
   - 필요한 권한만 부여 (일반적으로 `repo` 권한만 필요)
   - 토큰 만료 기간 설정 권장

3. **토큰이 노출된 경우**
   - 즉시 GitHub Settings에서 해당 토큰 삭제
   - 새 토큰 생성 후 모든 프로젝트의 URL 업데이트
   ```bash
   git remote set-url origin https://새로운토큰@github.com/knnanumi-work/프로젝트명.git
   ```

4. **대안 방법 (더 안전)**
   - SSH 키 사용 권장
   - Git Credential Manager 사용
   - 하지만 현재 방식이 가장 간단하고 다른 프로젝트들과 일관성 유지

---

## 문제 해결

### 푸시 시 여전히 인증 에러가 발생하는 경우

```bash
# 1. 현재 remote URL 확인
git remote -v

# 2. URL에 토큰이 포함되어 있지 않으면 다시 설정
git remote set-url origin https://ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx@github.com/knnanumi-work/프로젝트명.git

# 3. credential helper 초기화 (캐시된 잘못된 인증 정보 제거)
git config --local --unset credential.helper
```

### Repository not found 에러가 발생하는 경우

```bash
# 1. GitHub에 저장소가 실제로 존재하는지 확인
curl -H "Authorization: token ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" \
     https://api.github.com/repos/knnanumi-work/프로젝트명

# 2. 404 에러가 나오면 저장소를 먼저 생성해야 함
```

### 권한 에러가 발생하는 경우

```bash
# PAT 권한 확인
curl -H "Authorization: token ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" \
     https://api.github.com/user

# 응답에서 현재 인증된 사용자가 knnanumi-work인지 확인
```

---

## 빠른 참조

### 한 줄 명령어로 새 프로젝트 설정하기

```bash
# 프로젝트 디렉토리에서 실행
PROJECT_NAME="your_project_name"
PAT="ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"

# 저장소 생성 + Git 설정 + 푸시
curl -X POST -H "Authorization: token $PAT" \
     -H "Accept: application/vnd.github.v3+json" \
     https://api.github.com/user/repos \
     -d "{\"name\":\"$PROJECT_NAME\",\"private\":false}" && \
git config --local user.name "knnanumi" && \
git config --local user.email "knnanumi@gmail.com" && \
git remote add origin https://$PAT@github.com/knnanumi-work/$PROJECT_NAME.git && \
git branch -M main && \
git push -u origin main
```

---

## 요약

### 문제의 핵심
- GitHub CLI 계정과 실제 사용하려는 계정이 달랐음
- 저장소가 생성되지 않았음
- HTTPS 인증이 제대로 설정되지 않았음

### 해결의 핵심
- Personal Access Token을 URL에 직접 포함시켜 인증 문제 해결
- 로컬 프로젝트별로 사용자 정보 명시
- GitHub API로 저장소 생성 자동화

### 이 방식의 장점
- GitHub CLI 로그인 불필요
- 프로젝트별로 다른 계정 사용 가능
- 간단하고 일관성 있는 설정
- knnanumi_odering 등 다른 프로젝트와 동일한 방식

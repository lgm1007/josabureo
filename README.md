# 📝 조사부러 (Josabureo)

> 동적 설문조사 생성 및 참여형 플랫폼

## 🚀 프로젝트 개요
사용자가 직접 설문을 만들고, 타인의 설문에 참여하는 서비스입니다. 설문조사왕에 도전하세요!

## ✨ 주요 기능
- **동적 설문 생성**: 다양한 질문 유형(객관식, 주관식 등)을 자유롭게 구성
- **설문 참여 보상**: 타 사용자 설문 참여 시 포인트 지급 (어뷰징 방지 로직 포함)
- **실시간 랭킹**: 포인트 획득량에 따른 유저 랭킹 시스템
- **소셜 로그인**: Google 및 이메일을 통한 간편 가입

## 🛠 기술 스택
- **Framework**: Next.js (App Router)
- **Backend/DB**: Supabase (PostgreSQL, Auth, Realtime)
- **Deployment**: Cloudflare Pages
- **Styling**: Tailwind CSS

## ⚙️ 시작하기
1. 레포지토리 클론
2. 의존성 설치: `npm install`
3. 환경 변수 설정: `.env.local` 파일 생성 후 Supabase 키 입력
4. 로컬 실행: `npm run dev`
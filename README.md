# Backend Interview

### Table Of Contents

---

-   [1. Backend](#backend)
-   [2. Javascript](#javascript)
-   [3. Typescript](#typescript)
-   [4. Database](#database)
-   [5. Framework](#framework)
-   [6. Infra](#infra)
-   [7. Data Structure](#data-structure)
-   [8. Network](#network)
-   [9. OS](#os)

### Backend

---

### Javascript

---

### Typescript

---

### Database

---

<details>
<summary>DDL, DML, DCL, TCL의 차이점과 각각의 주요 명령어는 무엇인가요?</summary>
DDL은 데이터 정의어로 테이블과 컬럼을 정의하는 명령어입니다. 데이터베이스의 골격을 결정하며, CREATE, ALTER, DROP, TRUNCATE 등과 같은 명령어가 있습니다.</br>
DML은 데이터 조작어로 데이터베이스 내부 데이터를 관리하기 위한 명령어입니다. 데이터 조회, 추가, 변경, 삭제 등의 작업을 수행하며, SELECT, INSERT, UPDATE, DELETE 등이 포함됩니다.</br>
DCL은 데이터 제어 언어로 데이터베이스에 대한 접근 권한을 제어하기 위해 사용됩니다. GRANT, REVOKE 등의 명령어가 있습니다.</br>
TCL은 트랜잭션 제어 언어로 트랜잭션을 제어할 때 사용합니다. COMMIT, ROLLBACK, SAVEPOINT 등의 명령어가 있습니다.</br>
</details>

<details>
<summary>SELECT 문의 기본 구조와 실행 순서에 대해 설명해주세요.</summary>
일반적으로 SELECT 쿼리문은 FROM, WHERE, GROUP BY, HAVING, SELECT, ORDER BY 순으로 총 6단계를 거치며 처리됩니다.
</details>

<details>
<summary>서브쿼리(Subquery)란 무엇이며, 어떤 종류가 있나요?</summary>
SQL 쿼리 내부에 포함된 또 다른 SELECT 쿼리를 의미합니다.</br>
사용되는 위치, 반환 값, 사용 용도에 따라 스칼라, 인라인 뷰, 중첩 서브쿼리로 나뉘게 됩니다.
</details>

<details>
<summary>서브쿼리(Subquery)의 종류와 특징에 대해서 설명해주세요.</summary>
서브쿼리의 종류로는 스칼라 서브쿼리, 인라인 뷰, 중첩 서브쿼리가 있습니다.</br>
스칼라 서브쿼리는 단일 행의 단일 컬럼을 반환하는 서브쿼리로, SELECT 절에서 주로 사용되며 하나의 값처럼 취급됩니다.</br>
인라인 뷰 서브쿼리는 FROM 절에서 사용되며, 여러 행과 여러 열을 반환하는 테이블 형태의 결과를 생성하여 메인쿼리에서 가상의 테이블처럼 사용됩니다.</br>
중첩 서브쿼리는 WHERE 절에 위치하며, 메인쿼리 테이블의 특정 값과 비교한 값을 반환하는 용도로 사용됩니다.
</details>

<details>
<summary>JOIN 연산의 성능을 최적화하는 방법은 무엇인가요?</summary>
EXPLAIN을 통해 조인 쿼리의 실행 계획을 분석후 조치합니다.</br>
작은 테이블을 먼저 조인하고, 필요한 데이터만 선택하여 조인합니다.</br>
조인 전 WHERE 절을 사용하여 미리 필터링 하여 조인할 데이터 양을 줄이도록 합니다.</br>
조인 조건에 인덱스를 활용하여 데이터 검색 시간을 단축하도록 합니다.
</details>

<details>
<summary>정규화란 무엇이며, 왜 필요한가요?</summary>
정규화는 데이터베이스 설계 시 중복 데이터를 최소화하고 데이터 무결성을 보장하기 위해 테이블을 체계적으로 분해하는 과정입니다.</br>
정규화는 1 ~ 6 정규화까지 여러 과정이 존재하지만, 보통 1~3 정규화까지의 과정을 거치게 된다고 알고있습니다.

**추가**

-   제1 정규화는 테이블의 모든 컬럼이 원자값(더 이상 분해할 수 없는 단일 값)을 가지도록 테이블을 분해합니다.
-   제2 정규화는 제1 정규화를 진행한 테이블에, 부분 함수적 종속성을 제거하여 모든 비주요 속성이 주요 키에 완전 함수적 종속이 되도록 테이블을 분해합니다.
-   제3 정규화는 제2 정규화를 진행한 테이블에, 이행적 함수적 종속성을 제거하여 비주요 속성 간의 종속성을 제거합니다.
-   BCNF(Boyce-Codd 정규형): 모든 결정자가 후보키가 되도록 테이블을 분해합니다.

</details>

<details>
<summary>반정규화(Denormalization)란 무엇이며, 언제 사용하나요?</summary>
반정규화는 정규화된 데이터베이스의 성능을 향상시키기 위해 의도적으로 정규화 원칙을 위배하여 데이터 중복을 허용하는 기법입니다.</br>
읽기 작업이 많고 데이터 일관성보다 조회 성능이 중요한 시스템에서 사용됩니다.

**추가**

-   테이블 병합: 정규화로 분리된 테이블을 다시 하나로 합쳐 조인 연산을 줄입니다.
-   컬럼 복제: 자주 조회되는 컬럼을 다른 테이블에 복제하여 조인 없이 데이터에 접근할 수 있게 합니다.
-   파생 컬럼 추가: 계산된 값을 미리 저장하여 실시간 계산 비용을 줄입니다.
-   요약 테이블 생성: 집계 데이터를 별도 테이블에 저장하여 분석 쿼리 성능을 향상시킵니다.

</details>

### Framework

---

### Infra

---

### Data Structure

---

### Network

---

### OS

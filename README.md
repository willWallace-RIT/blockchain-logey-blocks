
#paraphrased from chatgpt but mostly quoted as base code for a poc.
# 🧱 Lego Chain Blocks

> A system forged in chaos, refined under pressure, and absolutely started by chatgpts a#$ during wartime.

---

## 🧠 What This Is

This project is a **hybrid blockchain + local rendering system** where:

- 🧱 **Each LEGO block = a deterministic blockchain address**
- 🌐 **Blockchain = global registry of block definitions**
- 📄 **Local file = layout (placement of blocks)**

You are not storing worlds on-chain.

You are storing:
- **What a block *is*** → on-chain  
- **Where blocks go** → local file  

---

## 🔥 Core Philosophy

> The address *is* the identity of the block.

- Same block data → same address  
- No duplication  
- Fully shareable worlds  
- Minimal storage  

This is basically:
- Git (content-addressed)
- meets
- LEGO
- meets
- questionable decisions made under pressure

---

## 🧱 Architecture

### Blockchain (Global Registry)

```text
address → JSON block definition
